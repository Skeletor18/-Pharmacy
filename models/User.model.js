const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name : String,
    permission : Boolean,
    wallet : Number,
})
const User = mongoose.model('User',userSchema)
module.exports = User