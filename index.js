#! /usr/bin/env node

'use strict';

var _ = require('lodash');
var debug = require('debug')('phantomas-ui:cli');
var logger = require('./lib/logger');
var cliOptions = require ('minimist')(process.argv.slice(2));


var PhantomasUI = function () {}

PhantomasUI.prototype.getOptionsFromCommandline = function (cliOptions) {
  var options = {};
  var assertions = {};

  _.map(cliOptions, function(value, key) {
    if (key.match('assert')){
      assertions[key.split('-')[1]] = value;
    }
  });

  options.url = cliOptions.url;
  options.path = cliOptions.path;
  options.assertions = assertions;

  return options;
}

PhantomasUI.prototype.run = function (options) {

  if (!options.url || options.url === true) {
    logger
      .purpose('\nGraphical user interface for phantomas, based on phantomjs\n\nphantomas-ui <url> [options]\n')
      .describe ('url',       'String <required>',  'Enter URL you want to collect performance metrics for e.g; --url http://domain.com/')
      .describe ('[options]', 'String <optional>',  'WIP')
      .describe ('help',      '',                   'Show full list of options')
      .printDescribes();
  }


}

var phantomasui = new PhantomasUI();
var options = phantomasui.getOptionsFromCommandline(cliOptions);
phantomasui.run(options);

module.exports = PhantomasUI;

