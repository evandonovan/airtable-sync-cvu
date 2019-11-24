Description
===========

Uses the node.js API for AirTable to sync data to AirTable.
Runs from shell, so either can be invoked directly, or a script
in another language, like PHP, can call it.

Configuration
=============

Requires a .config.ini file with the information from your AirTable Base.
Follow the example of the config.sample.ini in creating it.

You will need to update the code to have your table name and fields.
Copy from https://www.airtable.com/api.

Make sure that all the .js files are executable by the running user.

Make sure that /usr/bin/env node can locate node.js, and have the latest version of node.js available.
For use on *nix systems only.

Usage
=====

*Create a Record*:

`./create.js --name="Test" --phone="555-5555" --email="test@example.com"`

*Retrieve a Record*:

`./retrieve.js --recordid="RECORD_ID_HERE"`

Currently this code just prints all the details of this record.

*Update a Record*:

`./update.js --recordid="RECORD_ID_HERE" --stage="`

*Delete a Record*:

`./delete.js --recordid="RECORD_ID_HERE"`


Author
======
Evan Donovan for City Vision University (www.cityvision.edu)

License
========
ISC License (https://opensource.org/licenses/ISC)

TODOs
=====

* Add logging

Probably Out of Scope
=====================

* Make the table name configurable in the ini?
* Making it possible to have a configurable set of field names is probably
  out of scope - you will need to edit the code for that,
  based on what your airtable.com/api generates for you, as described above.
