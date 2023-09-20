const mongoose = require('mongoose')

const UserDetailSchema = new mongoose.Schema(
  {
    username: String,
    email: { type: String, unique: true },
    password: String,
    hasNGO:{
      type:Boolean,
      default:false,
    },
  },
  {
    collection: 'userInfo',
  }
)

module.exports = mongoose.model('userInfo', UserDetailSchema)
