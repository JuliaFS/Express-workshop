const express = require('express');
const handlebars = require('express-handlebars');

const app = express();

const PORT = 5000;

//Handlebrs configuration
app.engine('hbs', handlebars.engine({
    extname: 'hbs'
}));
app.set('viw engine', 'hbs');

//Routes
app.get('/', (req, res) => { //parvi endpoint
    res.send('Hello from express!');
}); 

app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`));