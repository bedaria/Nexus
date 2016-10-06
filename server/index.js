'use strict'

const express = require('express');
const app = express();

console.log("THIS WORKS inside of the server!");

app.listen(3000, () => {
    console.log('Listening on: http://localhost:3000');
});
