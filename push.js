#!/usr/bin/env node

/* Required packages */
var nconf = require('nconf'); // configuration

var Airtable = require('airtable'); // push airtable records

/* load config settings */
nconf.file('file', { file: './.config.json' });

var endpointUrl = nconf.get('endpointUrl');
var ConfApiKey = nconf.get('apiKey');
var ConfBase = nconf.get('base');

/* initialize base */
var base = new Airtable({apiKey: ConfApiKey}).base(ConfBase);

/* create a test record */
  base('Potential Students').create({
    "Name": "Test Person 2",
    "Phone": "1234567",
    "Email": "test@example.com",
    "Stage": "Enrolled Not Started (past day 5)"
  }, function(err, record) {
    if (err) {
      console.error(err);
      return;
    }
    console.log(record.getId());
  });
