#!/usr/bin/env node

/* Required packages */
var fs = require('fs')
  , ini = require('ini') // configuration

var args = require('minimist')(process.argv.slice(2)); // process command line arguments

var Airtable = require('airtable'); // push airtable records

/* load config settings */
var config = ini.parse(fs.readFileSync(__dirname + '/.config.ini', 'utf-8'));

/* initialize base */
var base = new Airtable({apiKey: config.api.apiKey}).base(config.api.base);

/* create a record in the base - casting all to string */
// TODO: see if typecast option in AirTable API could work
base('Potential Students').create({
    "Name": args.name.toString(),
    "Phone": args.phone.toString(),
    "Email": args.email.toString(),
    "Stage": "Lead - To Contact"
}, function(err, record) {
  if (err) {
    console.error(err);
    return;
  }
  console.log(record.getId());
});
