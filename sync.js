/* todo: Determine best practice for either proxying or leaving exposed -
         Proxying is probably better */
/* Alternatively, could use with shebang line perhaps, and pass data
                  from a PHP script, so as to avoid using Express. */

/* Required packages */
const express = require('express'); // server
const bodyParser = require('body-parser'); // parses HTTP requests

var nconf = require('nconf'); // configuration

var Airtable = require('airtable');

/* load config settings */
nconf.file('file', { file: './.config.json' });

var endpointUrl = nconf.get('endpointUrl');
var ConfApiKey = nconf.get('apiKey');
var ConfBase = nconf.get('base');

/* initialize base */
var base = new Airtable({apiKey: ConfApiKey}).base(ConfBase);

/* Main body of app */
const app = express();

app.use(bodyParser.urlencoded({ extended: true })); 

// tests that it works with get
app.get('/hello', function (req, res) {
  res.send('hello world');
})

/* Shows how to respond to a route with express -
   https://stackoverflow.com/a/52675577/263877 */
/* After done testing proof of concept, switch */
app.post('/example-post', (req, res) => {
  res.send(`Full name is:${req.body.fname} ${req.body.lname}.`);
});

/* todo: create the POST version that actually processes a form post */
app.get('/sync', (req, res) => {
  base('Potential Students').create({
    "Name": "Test Person",
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
});

// port 3000 seems to be a standard for something behind a proxy
const port = 3000;

app.listen(port, () => {
  // Todo: Instrument with some logging.
  console.log(`AirTable Sync server running on port ${port}`);
});
