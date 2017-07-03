const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = process.env.PORT || 8080;
const app = express();


// Log HTTP requests in the terminal
app.use(morgan('tiny'));

app.use(cors());

// Parse the body and accept json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/json'}));

// DATABASE
const db = require('./api/db.json').videos;

// Saving the latest filestack response
let fileStackResponse = '';

app.get('/', function(req, res) {
  res.send("HELLO WORLD");
})

app.route('/api/v1/videos')
  // Retrive the list of videos
  .get(function(req, res) {
    res.json(db.reverse()); // Reverse order to show the newest on top
  })
  // Push a new video to the DB
  .post(function(req, res) {
    const video = Object.assign({}, req.body, {id: db.length});
    db.push(video);
    console.log(video);
    res.json({ message: 'Successfully added!' });
  });

app.route('/convert')
  .post(function(req, res) {
    const { status, uuid, data: {url} } = req.body;
    if(status && status === 'completed') {
      db.forEach(function(video) {
        if(video.uuid == uuid) {
          video.url = url;
          video.converted = true;
        }
      })
    }
    fileStackResponse = req.body;
  })
  .get(function(req, res) {
    res.json({ response: fileStackResponse });
  })

app.listen(port, function() {
  console.log("Server is running on port " + port + "!");
})