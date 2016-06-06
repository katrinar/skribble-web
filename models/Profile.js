var mongoose = require('mongoose')

var ProfileSchema = new mongoose.Schema({
	firstName:{type: String, lowercase:true, trime: true, default: ''},
	lastName:{type: String, lowercase:true, trime: true, default: ''},
	email:{type: String, lowercase: true, trime: true, default: ''},
	image:{type:String, trim: true, default: ''},
	password:{type: String, default: ''},
	timestamp:{type: String, default:Date.now}
})

ProfileSchema.methods.summary = function(){
	var summary = {

		firstName: this.firstName,
		lastName: this.lastName,
		email: this.email,
		image: this.image,
		timestamp: this.timestamp, 
		id: this._id
	}

	return summary
}

module.exports = mongoose.model('ProfileSchema', ProfileSchema)