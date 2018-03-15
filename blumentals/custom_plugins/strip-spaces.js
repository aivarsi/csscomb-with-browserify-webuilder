'use strict';

module.exports = function () {
  /**
   * Trim trailing spaces on each line.
   * @private
   * @param {String} string Spaceful string
   * @returns {String}
   */
  function trim(string) {
    return string.replace(/[ \t]+\n/g, '\n');
  }

  return {
    name: 'strip-spaces',

    syntax: ['css', 'less', 'sass', 'scss'],

    accepts: {
      boolean: [true]
    },

    /**
     * Processes tree node.
     * @param {node} ast
     */
    process: function (ast) {
      var lastChild = ast.last();
      if (lastChild.is('space')) {
        lastChild.content = trim(lastChild.content).replace(/[ \t]+$/, '').replace(/[\n]+/g, '\n');
      }
      
      //strip space at the beginning of the document
      var firstChild = ast.first();
      if (firstChild.is('space')) {
        firstChild.content = '';
      }

      ast.traverseByType('space', function (space, index, parent) {
        space.content = trim(space.content);
        if (space.content === '') {
          parent.removeChild(index);
        }
      });
    },

    detectDefault: true,

    /**
     * Detects the value of an option at the tree node.
     * This option is treated as `true` by default, but any trailing
     * space would invalidate it.
     *
     * @param {node} ast
     */
    detect: function (ast) {
      let detected = [];

      var lastChild = ast.last();
      if (lastChild.is('space') && lastChild.content !== '\n' && lastChild.content.match(/^[ \n\t]+$/)) {
        detected.push(false);
      }
      
      var firstChild = ast.first();
      if (firstChild.is('space')) {
        detected.push(false);
      }

      ast.traverseByType('space', function (space) {
        if (space.content.match(/[ \t]\n/)) detected.push(false);
      });

      return detected;
    }
  };
}();