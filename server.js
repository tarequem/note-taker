//dependencies
const express = require('express');

const app = express();

//creates port
const port= process.env.PORT || 3001;

app.use(express.static('public'));

//middleware and data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//routes files
require('./routes/apiRoute')(app);
require('./routes/htmlRoute')(app);

//starts server
app.listen(port, () => {
    console.log(`Now listening`)
});