// get the 'class methods' which we'll apply accroding to each end point
const ProductController = require('../controllers/product.controller');

module.exports = function(app){
    app.get('/api/', ProductController.index);
    app.post('/api/products', ProductController.createProduct);
    app.get('/api/products', ProductController.getAllProducts);
    app.get('/api/products/:id', ProductController.getOneProduct);
    app.put('/api/products/:id/edit', ProductController.updateProduct); //added edit to the end of url
    app.delete('/api/products/:id', ProductController.deleteProduct);
}