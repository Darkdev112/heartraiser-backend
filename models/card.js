const mongoose = require('mongoose')
const card = new mongoose.Schema({
  title: {
    type: String,
    unique: true,
    required: [true, 'Title Must be provided'],
  },
  description: {
    type: String,
    required: [true, 'description Must be provided'],
  },
  amount: {
    type: Number,
    required: [true, 'Amount must be specified'],
  },
  day: {
    type: Number,
    required: [true, 'day must be specified'],
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  img: {
    type: String,
  },
  slug:{
    type:String,
  },
  user:{
    type : String,
  },
  email:{
    type : String,
  },
  amountRaised : {
    type : Number,
    default : 0,
  },
  category : {
    type : String,
  },
  vname:{
    type : String,
  },
  phone:{
    type : String,
  },
  location:{
    type: String
  },
  AccountName:{
    type : String,
  },
  AccountNumber:{
    type : Number,
  },
  IFSCcode : {
    type : String,
  }
})

module.exports = mongoose.model('card', card)