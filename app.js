const express = require('express');
// path lets us navigate the
const path = require('path');
const hbs = require('hbs');
// require the sql conection
const sql = require('./utils/sql.js')
const port = process.env.PORT || 3000; 
const app = express();

app.use(express.static('public'));

// tell exprss to use the handlebars engine to render data
app.set('view engine', 'hbs');

// tell express to use tghe views folder to find this template
app.set('views', __dirname + '/views');


app.get('/', (req, res) =>  {
  console.log('you are on the home page');
  res.render('home');
});

    // this is the hamburger function 
    (function(){
      "use strict";

      console.log('fired');

      var button = document.querySelector("#button");
      var burgerCon = document.querySelector("#burgerCon");

      function hamburgerMenu() {
        burgerCon.classList.toggle("slideToggle");
        button.classList.toggle("expanded");
      }

      button.addEventListener("click", hamburgerMenu, false);
    });


app.listen(port, () => {
  console.log(`Server running at ${port}`);
});
