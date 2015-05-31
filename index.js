#! /usr/bin/env node

'use strict';
var _ = require('lodash');
var debug = require('debug')('phantomas-ui:cli');
var cliOptions = require ('minimist')(process.argv.slice(2));


var PhantomasUI = function () {}

PhantomasUI.prototype.getOptionsFromCommandline = function () {
  //!_.isEmpty(cliOptions) &&
  return _.omit(cliOptions, '_');
}

PhantomasUI.prototype.run = function (options, cb) {
  console.log(options);
  cb();
}

module.exports = PhantomasUI;


//check where the script is being called from
  //if called from command line and has options object
     //use options array
  //else
     //use instantiated options object