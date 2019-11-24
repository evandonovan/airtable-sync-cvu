var fs = require('fs');
// Reading the object 
var data = fs.readFileSync('./.config.json');
var myObj;
try {
  // Parsing the object
  myObj = JSON.parse(data);
  console.dir(myObj);
} catch (err) {
  console.log('There has been an error parsing your JSON.');
  console.log(err);
}
