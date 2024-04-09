const User = require('../models/user.model');

exports.getAllUsers = async () => {
    return await User.find();
}

exports.getUser = async (id) => {
    return await User.findById(id);
}
