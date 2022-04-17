// Code to require a NodeJS module called express
const express = require('express');
const app = express();
const port = 8001;

// Define all the controllers
var homePage = (req, res) => {
    res.send('Hello, I am Mehak Gupta')
};
var aboutPage = (req, res) => {
    res.sendFile('./link.html', { root: __dirname });
};

// Define all the routes
app.get('/', homePage);
app.get('/about', aboutPage);

// Response for every other route
app.use((req, res) => {
    res.send('Error 404, not found!')
});

// This code helps the server to listen to certain requests that are made on the server
app.listen(port, () => {
    console.log(`Server listening on port ${port}...`);
});