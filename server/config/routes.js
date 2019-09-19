const products = require('../controllers/products.js')

module.exports = function (app) {
    app.get('/getproducts', (req, res) => {
        products.index(req,res)
    });
    app.get('/getproducts/:id', (req, res) => {
        products.findone(req,res);
    });
    app.post('/postproducts', (req, res) => {
        products.create(req, res);
    });
    app.put('/putproducts/:id', (req, res) => {
        console.log(req.body)
        if(req.body.title.length < 4 || req.body.price.length < 1){
            return {errors: "Invalid information. Check title and price length."}
        }
        else{
            products.edit(req, res);
        }
    });
    app.delete('/deleteproducts/:id', (req, res) => {
        products.delete(req, res);
    });
}