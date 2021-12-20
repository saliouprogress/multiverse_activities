const express = require('express');
const Handlebars = require('handlebars');
const {create} = require('express-handlebars');
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access');

const expressHandlebars = create({
  handlebars: allowInsecurePrototypeAccess(Handlebars),
  extname: '.hbs',
});

const app = express();
const PORT = 3000;

app.engine('.hbs', expressHandlebars.engine);  
app.set('view engine', '.hbs');

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'));


app.use('/', require('./routes'));

app.listen(PORT, () => {
  console.log(`Server is up and running at Port:${PORT}`);
})