//This file isn't transpiled so must use commonJS and ES5

//Register babel to transpile before our tests run
require('babel-register')();

//disable webpack features that mocha does not understand
require.extensions['.css'] = function() {

};