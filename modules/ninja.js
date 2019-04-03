const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//Create GeoLocation Schema
const geoSchema = new Schema({
    type: {
        type: String,
        default: "Point"
    },
    coordinates: {
        type: [Number],
        index: "2dsphere"
    }
})


//create ninja Schema & model
const ninjaSchema = new Schema({
    name:{
        type: String,
        required: [true, 'Name feild is required']
    },
    rank:{
        type: String
    },
    available:{
        type: Boolean,
        default: false
    },
    geometry: geoSchema
    //add in geolocation
    
});

const Ninja = mongoose.model('ninja', ninjaSchema); //nombre de la bd + el modelo que hemos creado

module.exports = Ninja;