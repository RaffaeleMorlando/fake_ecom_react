import mongoose from 'mongoose';

// Crea mongoose schema
const itemSchema = mongoose.Schema({
  name: {type: String, required: true},
  brand: {type: String, required: true},
  price: {
    type: Number,
    default: 0
  },
  description: String,
  image: String,
  createdAt: {
    type: Date,
    default: new Date()
  },
  id: String
})

const Item = mongoose.model('Item',itemSchema);

export default Item;

// or 
// module.exports = mongoose.model('Item',itemSchema);
