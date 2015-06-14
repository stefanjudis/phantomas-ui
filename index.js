#! /usr/bin/env node

'use strict';

//var phantomasui = require('..');
var _ = require('lodash');
var debug = require('debug')('phantomas-ui:cli');
var logger = require('./lib/logger');
var cliOptions = require ('minimist')(process.argv.slice(2));

var PhantomasUI = function () {}

PhantomasUI.prototype.getOptionsFromCommandline = function () {
  //!_.isEmpty(cliOptions) &&
  return _.omit(cliOptions, '_');
}

PhantomasUI.prototype.run = function (options, cb) {

  var cmdOptions = this.getOptionsFromCommandline();

  if (!cmdOptions.url) {
    logger
      .purpose('\nGraphical user interface for phantomas, based on phantomjs\n\nphantomas-ui <url> [options]\n')
      .describe ('url', 'String <required>', 'Enter URL you want to collect performance metrics for e.g; --url http://domain.com')
      .describe ('[options]', 'String <optional>', 'WIP')
      .describe ('help', '', 'Show full list of options')

      .printDescribes();
  }

}

var phantomasui = new PhantomasUI();
phantomasui.run();

module.exports = PhantomasUI;


//check where the script is being called from
  //if called from command line and has options object
     //use options array
  //else
     //use instantiated options object