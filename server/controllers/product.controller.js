const { Product } = require('../models/product.model');
const productRoutes = require('../routes/product.routes');
module.exports.index = (request, response) => {
    response.json({
        message: "Hello"
    });
}
    // create a product
module.exports.createProduct = (request, response) => {
    const { name, price, description } = request.body;
    Product.create({
        name,
        price,
        description
    })
        .then(product => response.json(product))
        .catch(err => response.json(err));
}

// list all products
module.exports.getAllProducts = (request, response) => {
    Product.find({})
        .then(products => response.json(products))
        .catch(err => response.json(err))
}

// find/show one products
module.exports.getOneProduct = (request, response) => {
    Product.findOne({_id:request.params.id})
        .then(product => response.json(product))
        .catch(err => response.json(err))
}

// update one product
module.exports.updateProduct = (request, response) => {
    Product.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        .then(updatedProduct => response.json(updatedProduct))
        .catch(err => response.json(err))
}

// delete one product
module.exports.deleteProduct = (request, response) => {
    Product.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}
