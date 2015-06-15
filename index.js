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
  options.help = cliOptions.help;
  options.assertions = assertions;

  return options;
}

PhantomasUI.prototype.run = function (options) {

  if (options.url === undefined || options.url === true || options.help === true) {
    this.showHelp();
  }


}

PhantomasUI.prototype.showHelp = function () {
  logger
    .purpose('\nGraphical user interface for phantomas, based on phantomjs\n\nphantomas-ui <url> [options]\n')
    .describe ('help',                  '',                   'Show full list of options')
    .describe ('url',                   'String <required>',  'Enter URL want to collect performance metrics for e.g; --url http://domain.com/')
    .describe ('assert-assetsWithQueryString',  'Number <optional>',    'Receive warning, when there are more than 3 assets with a query string')
    .describe ('assert-biggestLatency',         'Number <optional>',    'Description')
    .describe ('assert-bodyHTMLSize',           'Number <optional>',    'Receive warning, when the bodyHTMLsize is bigger given size mentioned in parameter')
    .describe ('assert-commentsSize',           'Number <optional>',    'Description')
    .describe ('assert-consoleMessages',        'Number <optional>',    'Description')
    .describe ('assert-hiddenContentSize',      'Number <optional>',    'Description')
    .describe ('assert-jsErrors',               'Number <optional>',    'Receive warning, when more than JS errors appear')
    .describe ('assert-gzipRequests',           'Number <optional>',    'Receive warning, when uncompressed assets are loaded')
    .describe ('assert-medianResponse',         'Number <optional>',    'Description')
    .describe ('assert-nodesWithInlineCSS',     'Number <optional>',    'Description')
    .describe ('assert-requests',               'Number <optional>',    'Description')
    .describe ('assert-timeToFirstImage',       'Number <optional>',    'Description')
    .describe ('assert-DOMelementsCount',       'Number <optional>',    'Description')
    .describe ('assert-DOMqueries',             'Number <optional>',    'Description')
    .describe ('buildUi',                       'Boolean <optional>',   'Description')
    .describe ('limitIncludedRuns',             'Number <optional>',    'Description')
    .describe ('numberOfRuns',                  'Number <optional>',    'Description')
    .describe ('phantomas-options',             'Str|Num <optional>',   'Description')
    .describe ('output',                        'Number <optional>',    'Description')
    .describe ('path',                          'String <optional>',    'Description')
    .printDescribes();
}

var phantomasui = new PhantomasUI();
var options = phantomasui.getOptionsFromCommandline(cliOptions);
phantomasui.run(options);

module.exports = PhantomasUI;

