const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoConnect = require("./util/database").mongoConnect;

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');


const errorController = require('./controllers/error');
const otherErrorContorller = require('./controllers/error-500')
const User = require('./models/user');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


app.get('/shop', (req, res) => {
    res.render('shop/product-catalog', {
        pageTitle: 'Product Catalog',
        path: '/shop/product-catalog',
      });
      //res.redirect('/admin/products') це переадресація вона буде потрібна в подальшому 
});

// app.get('/admin', (req, res) => {  // це треба прибрати бо в контролерах admin.js воно вже рендериться
//     res.render('admin/add-product', {
//         pageTitle: 'Add Product',
//         path: '/admin/add-product',
//       });
//       res.redirect("/admin/admin-products");
// });


const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
//const { isMainThread } = require('worker_threads');


app.use('/admin', adminRoutes);
//app.use(shopRoutes);

app.use(errorController.get404);
app.use(otherErrorContorller.get500);

mongoConnect(() => {
 app.listen(8000);
});