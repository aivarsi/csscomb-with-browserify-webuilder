'use strict';

module.exports = function () {

  function isComment(node) {
    if (!node) {
      return false;
    }
    return node.is('singlelineComment') || node.is('multilineComment');
  }

  function processNode(node) {    
    removeComments(node);
    mergeAdjacentWhitespace(node);
  }

  function removeComments(topnode) {
    topnode.eachFor(function (node, i) {
      if (isComment(node)) {
        topnode.removeChild(i);
      } else {
        processNode(node);
      }
    });
  }

  /**
   * Removing comment nodes from tree may result in two adjacent whitespace
   * nodes which is not correct AST:
   * [space, node, space] => [space, space]
   * To ensure correctness of further processing we should merge such nodes
   * into one:
   * [space, space] => [space]
   */
  function mergeAdjacentWhitespace(node) {
    if (Array.isArray(node.content)) {
        var i = node.content.length - 1;
        while (i-- > 0) {
          if (node.get(i) != null) {        
              if (node.get(i).is('space') && node.get(i + 1) && node.get(i + 1).is('space')) {
                node.get(i).content += node.get(i + 1).content;
                node.removeChild(i + 1);
              }
          }
        }
    }
  }

  return {
    name: 'remove-comments',

    runBefore: 'lines-between-rulesets',

    syntax: ['css', 'less', 'sass', 'scss'],

    accepts: {
      boolean: [true]
    },

    /**
     * Remove comments.
     *
     * @param {String} ast
     */
    process: function (ast) {
      processNode(ast);
    },

    detectDefault: true,

    /**
     * Detects the value of an option at the tree node.
     * This option is treated as `true` by default, but any trailing space
     * would invalidate it.
     *
     * @param {node} ast
     */
    detect: function (ast) {
      let detected = [];

      ast.traverse(function (node) {
        if (isComment(node)) {
          detected.push(false);
        }
      });

      return detected;
    }
  };
}();