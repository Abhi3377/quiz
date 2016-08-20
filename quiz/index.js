const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path=require('path');
const main = require('./routes/main');

app.use('/cs',express.static('./css'));
app.use('/js',express.static('./js'));
app.use('/image',express.static('./images'));





app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.set('port',process.env.PORT || 4000);

app.use('/',main);


app.listen(app.get('port'),function () {
    console.log("server start");

})