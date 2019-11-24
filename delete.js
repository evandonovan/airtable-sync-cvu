#!/usr/bin/env node

/* Required packages */
var fs = require('fs')
  , ini = require('ini') // configuration

var args = require('minimist')(process.argv.slice(2)); // process command line arguments

var Airtable = require('airtable'); // push airtable records

/* load config settings */
var config = ini.parse(fs.readFileSync('./.config.ini', 'utf-8'));

/* initialize base */
var base = new Airtable({apiKey: config.api.apiKey}).base(config.api.base);

base('Potential Students').destroy(args.recordid.toString(), function(err, deletedRecord) {
  if (err) {
    console.error(err);
    return;
  }
  console.log('Deleted record', deletedRecord.id);
});
