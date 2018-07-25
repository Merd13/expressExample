var mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
    username: String
});

var user = mongoose.model('users', userSchema);

module.exports = {
    user: user
}
