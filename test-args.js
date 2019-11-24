#!/usr/bin/env node

var args = process.argv.slice(2);

// print arguments passed
args.forEach(function (val, index, array) {
  console.log(index + ': ' + val);
});
