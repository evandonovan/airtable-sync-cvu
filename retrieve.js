#!/usr/bin/env node

/* Required packages */
var fs = require('fs')
  , ini = require('ini') // configuration

var Airtable = require('airtable'); // airtable connection

/* load config settings */
var config = ini.parse(fs.readFileSync('./.config.ini', 'utf-8'));

/* initialize base */
var base = new Airtable({apiKey: config.api.apiKey}).base(config.api.base);

/* retrieve a record from the base */
base('Potential Students').find('recEWhT30bTEhAlj8', function(err, record) {
    if (err) { console.log('Error: ', err); return; }
    console.log('Retrieved', record.id);
	console.dir(record);
});
