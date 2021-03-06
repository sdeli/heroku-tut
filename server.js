const express = require('express');
const ejs = require('ejs');

const port = process.env.PORT || 3000;

const app = express();

app.locals.getCurrentYear = () => {
    return new Date().getFullYear();
};

app.locals.capitalizeCase = (text) => {
    return text.toUpperCase();
};


// serving up static files
app.use(express.static(`${__dirname}/public-static-assets`));

// create middleware
app.use((req, res, next) => {
    // middleware body
    next();
});

// set up templating engine
app.set('view engine', 'ejs');


// routing
app.get('/', (req, res) => {
    res.render('home.ejs', {
        pageTitle : 'Home Page',
        welcomeMessage : 'welome on the home page',
        currYear : new Date().getFullYear()
    });
});

// render templated htmls and pass data into the template
app.get('/about', (req, res) => {
    res.render('about.ejs', {
        pageTitle : 'About Page',
        welcomeMessage : 'read about us',
        num : 3,
        currYear : new Date().getFullYear()
    });
});

app.get('/projects', (req, res) => {
    res.render('home.ejs', {
        pageTitle : 'Projects Page',
        welcomeMessage : 'welome on the projects page',
        currYear : new Date().getFullYear()
    });
});

//server-tut/public-static-assets/help/help.html
app.listen(port)