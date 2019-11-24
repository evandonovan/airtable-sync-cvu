#!/usr/bin/env node

/* Required packages */
var fs = require('fs')
  , ini = require('ini') // configuration
  
var args = require('minimist')(process.argv.slice(2)); // process command line arguments

var Airtable = require('airtable'); // airtable connection

/* load config settings */
var config = ini.parse(fs.readFileSync(__dirname + '/.config.ini', 'utf-8'));

/* initialize base */
var base = new Airtable({apiKey: config.api.apiKey}).base(config.api.base);

/* update a record */
// TODO: confirm this is a real stage first to prevent a possible error
base('Potential Students').update(args.recordid.toString(), {
  "Stage": args.stage.toString(),
}, function(err, record) {
  if (err) {
    console.error(err);
    return;
  }
  console.log(record.get("Stage"));
});