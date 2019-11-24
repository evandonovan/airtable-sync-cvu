#!/usr/bin/env node

/* Required packages */
var fs = require('fs')
  , ini = require('ini') // configuration
  
var args = require('minimist')(process.argv.slice(2)); // process command line arguments

var Airtable = require('airtable'); // airtable connection

/* load config settings */
var config = ini.parse(fs.readFileSync('./.config.ini', 'utf-8'));

/* initialize base */
var base = new Airtable({apiKey: config.api.apiKey}).base(config.api.base);

/* retrieve a record from the base */
base('Potential Students').find(args.recordid.toString(), function(err, record) {
    if (err) { console.log('Error: ', err); return; }
    console.log('Retrieved', record.id);
	// show fields from record, etc.
	console.dir(record);
});
