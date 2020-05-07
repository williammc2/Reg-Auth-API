const express = require('express');

const bodyParser = require('body-parser');


const app = express();

app.use(bodyParser.json()); //para que ele entenda quando a API receber uma requisição em Json

app.use(bodyParser.urlencoded({extended: false}));//para entender quando receber um parametro por URL e ele conseguir encodar esse parametro


require('./controllers/authController')(app);

app.listen(3000);
