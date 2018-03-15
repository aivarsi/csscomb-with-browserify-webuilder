'use strict';

require('babel-polyfill');

class EmptyFs {
    constructor() {
    }

    readdirSync (path, options) {
        return [];
    }
}

let fs = new EmptyFs();

module.exports = fs;