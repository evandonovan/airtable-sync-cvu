Description
===========

Uses the node.js API for AirTable to sync data to AirTable.
Runs from shell, so either can be invoked directly, or a script
in another language, like PHP, can call it.

Requires a .config.ini file with the information from your AirTable Base.
Follow the example of the config.sample.ini in creating it.

Author
======
Evan Donovan for City Vision University (www.cityvision.edu)

License
========
ISD License

TODOs
=====

* Finish the CRUD methods
* Make the table name configurable in the ini?
* Making it possible to have a configurable set of field names is probably
  out of scope - you will need to edit the scope for that,
  based on what your airtable.com/api generates for you.
