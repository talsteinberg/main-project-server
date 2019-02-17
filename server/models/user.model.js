const mongoose = require('mongoose');
//const classes = require('./common/classes');
//const enums = require('./common/enums');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    id          : Number, 
    first_name  : String,
    last_name   : String,
    email       : String,
    user_name   : String,
    password    : String, 
    phone       : String,
    rank        : {starsNum : Number, reviews : []},
    offers      : [String],
    requests    : [String],
    birth_date  : Date,
    address     : String,
    last_login  : Date
});

const UserModel = mongoose.model('user',UserSchema);
  
module.exports = UserModel;