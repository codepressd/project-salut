import mongoose from 'mongoose';
import bcrypt from 'bcrypt-nodejs';

const userSchema = mongoose.Schema({

	local :{
		username	: String,
		email		: String,
		password 	: String,
		firstName	: String,
		lastName	: String,
		address	: String,
		city		: String,
		state		: String,
		region		: String,
		businessType	: String,
		userType	: String,
		products	: Array

	}
});

userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};


module.exports = mongoose.model('User', userSchema)