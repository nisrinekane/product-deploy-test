const mongoose = require('mongoose');

// our schema
const ProductSchema = new mongoose.Schema({
    name: { 
      type: String,
      required: true,
      minlength: [3, 'product name must be at least 3 characters']
    },
    price: { 
      type: Number,
      required: [true, 'please enter a price'] 
    },
    description: {
      type: String,
      required: true,
      minglength: [6, 'product description must be at least 6 characters']
    }
}, { timestamps: true });

// export and set product  to a model which take the name of the schema and schema itself as args
module.exports.Product = mongoose.model('Product', ProductSchema);