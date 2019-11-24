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

/* retrieve records from the base matching a name */
/* using template literals to filter by formula - see https://community.airtable.com/t/select-or-find-a-record-based-on-a-field-value-node-js/3930/5 */
base('Potential Students').select({
      filterByFormula: `{Name} = "${args.name}"`,
	  fields: ["Name", "Stage", "Student ID"] // only show certain fields
	/* ,maxRecords: 3,                  // don't need to define a max, since looking for duplicates
       view: "Grid view"               // if you wanted to apply the filters of the current grid view on the site - currently showing even converted */
}).eachPage(function page(records, fetchNextPage) {
    // This function (`page`) will get called for each page of records.

    records.forEach(function(record) {
        console.log('Retrieved', record.get('Name'));
		console.dir(record);
    });

    // To fetch the next page of records, call `fetchNextPage`.
    // If there are more records, `page` will get called again.
    // If there are no more records, `done` will get called.
    fetchNextPage();

}, function done(err) {
    if (err) { console.error(err); return; }
})