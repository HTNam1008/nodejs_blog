const path=require('path');
const express = require('express');
const morgan=require('morgan');

const handlebars  = require('express-handlebars');
const app = express();
const port = 3000;

// static file - cài đường dẫn cho file tĩnh - localhost:3000/img/logo.png
app.use(express.static(path.join(__dirname,'public')));

// http logger
app.use(morgan('combined'));

// template engine
app.engine('hbs',handlebars.engine({
  extname: '.hbs'
}));
app.set('view engine','hbs');
app.set('views',path.join(__dirname,'resource/views'));


app.get('/', (req, res) => {
    res.render('home')
});

app.get('/news', (req, res) => {
  res.render('news')
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});