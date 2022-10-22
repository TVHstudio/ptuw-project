let express = require('express');
let app = express();


app.use(express.static(__dirname + '/public'));
//use view engine
let expressHbs = require('express-handlebars');
let hbs = expressHbs.create({
    extname : 'hbs',
    defaultLayout : 'layouts',
    layoutsDir: __dirname + '/views/layouts',
    partialsDir:__dirname + '/views/partials'
});
app.engine('hbs',hbs.engine);
app.set('view engine', 'hbs');

app.get('/', (req,res) => {
    res.render('index');
});

// app.get('/:page', (req,res) => {
//     let banners = {
//         blog : 'Our blog',
//         category : 'Shop Category',
//         cart : 'Shopping Cart',
//         checkout : 'Checkout',
//         confirmation : 'Confirmation',
//         contact : 'Contact',
//         register : 'Register',
//         login : 'login',
//     };
//     let page = req.params.page;
//     res.render(page, {banner: banners[page]});
// });

app.get('/blog', (req,res) => {
    res.render('blog');
});
app.get('/cart', (req,res) => {
    res.render('cart');
});
app.get('/category', (req,res) => {
    res.render('category');
});
app.get('/checkout', (req,res) => {
    res.render('checkout');
});
app.get('/confirmation', (req,res) => {
    res.render('confirmation');
});
app.get('/contact', (req,res) => {
    res.render('contact');
});
app.get('/register', (req,res) => {
    res.render('register');
});
app.get('/login', (req,res) => {
    res.render('login');
});
app.get('/single-blog', (req,res) => {
    res.render('single-blog');
});
app.get('/single-product', (req,res) => {
    res.render('single-product');
});
app.get('/tracking-order', (req,res) => {
    res.render('tracking-order');
});

app.set('port',process.env.port || 3000);
app.listen(app.get('port'), () => {
    console.log(`Server is running at port ${app.get('port')}`);
});
