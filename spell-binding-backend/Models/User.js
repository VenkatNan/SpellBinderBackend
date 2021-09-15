const mongoose = require('../db/connection')

const userSchema = new mongoose.Schema({
    name: String,
    splLvl: Number,
    class: String,
    spells: [String],
    img: String,


})


module.exports = mongoose.model('User', userSchema);