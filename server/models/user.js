import mongoose from 'mongoose';

// Crea mongoose schema
const userSchema = mongoose.Schema({
  name: {type: String, required: true},
  email: {type: String, required: true},
  password: {type: String, min: 6, required: true},
  createdAt: {type: Date,default: new Date()}
})

const User = mongoose.model('User',userSchema);

export default User;

// or 
// module.exports = mongoose.model('User',userSchema);
