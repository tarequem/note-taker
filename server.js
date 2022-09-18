//dependencies
const express = require('express');

const app = express();

//creates port
const PORT = process.env.PORT || 3001;

//middleware and data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//routes files
app.use(express.static('public'));
app.use(require('./routes/apiRoute'));
app.use(require('./routes/htmlRoute'));

//starts server
app.listen(PORT, () => {
    console.log(`Now listening`)
});