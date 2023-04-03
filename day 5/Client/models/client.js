const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const ClientSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  fname: {
    type: String,
    default:"Nada"
  },
  lname: {
    type: String,
    default:"Magdy"
  },
  phone: {
    type: String,
    default:"11254864"
  },
  username: {
    type: String,
    required: true,
    unique: true
  }
  
})

const Client = mongoose.model('clients', ClientSchema);
module.exports = Client;
