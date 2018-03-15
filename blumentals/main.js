

window.CSSCOMB = function(fname, txt, settings, callback, errorcallback) {
     

    var CombPlugins = require('csscomb-plugins');
    var comb_plugins = new CombPlugins();

    var Comb = require('csscomb');

    var comb = new Comb({});

    Object.keys(comb_plugins).forEach(function(pl_name) {
        comb.use(comb_plugins[pl_name]);
    });
    comb.configure(settings);

    comb.processString(txt, {
            syntax: 'css',
            filename: fname
        }).then(function(results) {
            callback(results);
        }).catch(e => {
            if (errorcallback) {
                errorcallback(e);
            }
        });
}