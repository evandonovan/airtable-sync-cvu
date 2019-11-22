const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true })); 

/* Shows how to respond to a route with express -
   https://stackoverflow.com/a/52675577/263877 */
/* After done testing proof of concept, switch */
app.post('/example', (req, res) => {
  res.send(`Full name is:${req.body.fname} ${req.body.lname}.`);
});

const port = 8080;

app.listen(port, () => {
  console.log(`Server running on port${port}`);
});
