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

/* retrieve a record from the base */
base('Potential Students').find('recuJLZukvombFqZH', function(err, record) {
    if (err) { console.log('Error: ', err); return; }
    console.log('Retrieved', record.id);
	console.dir(record);
});
