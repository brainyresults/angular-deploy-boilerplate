const express = require('express');
const path = require('path');
const app = express();

const workDir = '/dist/public';

// Serve static files....
app.use(express.static(__dirname + workDir));

// Send all requests to index.html
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname + workDir + '/index.html'));
});

// default PORT
app.listen(process.env.PORT || 3100);
