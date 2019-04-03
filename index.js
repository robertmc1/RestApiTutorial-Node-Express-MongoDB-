const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//set up express app
const app = express();

//conect to mongo db
mongoose.connect("mongodb://localhost/ninjago", { useNewUrlParser: true });

app.use(express.static('public'));

//midleware 1 
app.use(bodyParser.json());

//initializa routes: para usar las rutas de .routes/api.js
app.use('/api', require('./routes/api'));

//midleware 3 - error habdling
app.use(function(err, req, res, next){
    //console.log(err.status)
   res.status(422).send({error: err.message});
})

//esto corrige el erro de deprecated mara FindByIdAnd....
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);


//listen for requests
app.listen(process.env.port || 4000, function(){
    console.log('Leastening for requests');
});
