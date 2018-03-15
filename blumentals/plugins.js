module.exports = function () { 
    return {
        'always-semicolon': require('../blumentals/custom_plugins/always-semicolon.js'), //modified (fixed)
        
        'block-indent': require('../blumentals/custom_plugins/block-indent.js'), //modified (fixed)
        
        'color-case': require('csscomb/lib/options/color-case.js'),
        'color-shorthand': require('csscomb/lib/options/color-shorthand.js'),
        'element-case': require('csscomb/lib/options/element-case.js'),
        'eof-newline': require('csscomb/lib/options/eof-newline.js'),
        'leading-zero': require('csscomb/lib/options/leading-zero.js'),
        
        'lines-between-rulesets': require('../blumentals/custom_plugins/lines-between-rulesets.js'), //modified (fixed)

        'quotes': require('csscomb/lib/options/quotes.js'),
        
        'remove-comments': require('../blumentals/custom_plugins/remove-comments.js'), //custom
        
        'remove-empty-rulesets': require('csscomb/lib/options/remove-empty-rulesets.js'),
        'sort-order-fallback': require('csscomb/lib/options/sort-order-fallback.js'),
        
        'sort-order': require('../blumentals/custom_plugins/sort-order.js'), //modified (fixed)
        
        'space-after-colon': require('csscomb/lib/options/space-after-colon.js'),
        'space-after-combinator': require('csscomb/lib/options/space-after-combinator.js'),
        'space-after-opening-brace': require('csscomb/lib/options/space-after-opening-brace.js'),
        'space-after-selector-delimiter': require('csscomb/lib/options/space-after-selector-delimiter.js'),
        'space-before-closing-brace': require('csscomb/lib/options/space-before-closing-brace.js'),
        'space-before-colon': require('csscomb/lib/options/space-before-colon.js'),
        'space-before-combinator': require('csscomb/lib/options/space-before-combinator.js'),
        'space-before-opening-brace': require('csscomb/lib/options/space-before-opening-brace.js'),
        'space-before-selector-delimiter': require('csscomb/lib/options/space-before-selector-delimiter.js'),
        'space-between-declarations': require('csscomb/lib/options/space-between-declarations.js'),
        
        'strip-spaces': require('../blumentals/custom_plugins/strip-spaces.js'), //modified (strip spaces at the beginning of the file, too)
        
        'tab-size': require('csscomb/lib/options/tab-size.js'),
        'unitless-zero': require('csscomb/lib/options/unitless-zero.js'),
        'vendor-prefix-align': require('csscomb/lib/options/vendor-prefix-align.js')
    } 
}


