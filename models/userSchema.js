const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    fullname: String,
    email: String,
    password: String,
    vehicle: String,
    to_pay: Number
})

const UsersSchema = mongoose.model('UserSchema', UserSchema);

module.exports = UsersSchema;