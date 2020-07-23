export{};
const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcrypt');

const UserSchema = new Schema({
  _id: Number,
  username: String,
	email: String,
	password: String
})


module.exports = mongoose.model('User', UserSchema);

