const mongoose = require('mongoose')
const userDetailSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: [true, 'Title Must be provided'],
  },
  email: {
    type: String,
    unique: true,
    required: [true, 'email Must be provided'],
  },
  address: {
    type: String,
  },
  occupation: {
    type: String,
  },
  age: {
    type: Number,
  },
  city: {
    type: String,
  },
  state: {
    type: String,
  },
  pincode: {
    type: Number,
  },
  about: {
    type: String,
  },
  AccountHolder: {
    type: String,
    required: [true, 'AccountName Must be provided'],
  },
  AccountNumber: {
    type: Number,
    unique: true,
    required: [true, 'AccountNumber Must be provided'],
  },
  IFSCcode: {
    type: String,
    unique: true,
    required: [true, 'IFSC code Must be provided'],
  },
  NGOname: {
    type: String,
    default: null,
  },
  NGOregd: {
    type: String,
    // required: [true, 'registration id Must be provided'],
    default: null,
  },
  NGOvision: {
    type: String,
    default: null,
  },
  NGOachiv: {
    type: String,
    default: null,
  },
  NGOsector: {
    type: String,
    default: null,
  },
  NGOcity: {
    type: String,
    default: null,
  },
  NGOstate: {
    type: String,
    default: null,
  },
  NGOpin: {
    type: Number,
    default: null,
  },
  NGOaddress: {
    type: String,
    default: null,
  },
  profilePic: {
    type : String
  }
})

module.exports = mongoose.model('user', userDetailSchema)