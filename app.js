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


app.get('/', (req, res) => {

  sql.getConnection((err, connection) => {
      if(err) {
          return console.log(err.message);
      }
      let query = "SELECT * FROM tbl_home";

      sql.query(query, (err, rows) => {
          connection.release();
          if (err) { return console.log(err.message) }

          rows.forEach(row => {
              sqlArrImg.push(row.Image);
              sqlArrHead.push(row.Heading);
              sqlArrParag.push(row.Paragraph);
          })
          
            res.render('home', {
                contentOneImg: sqlArrText[0],
                contentOneHead: sqlArrName[0],
                contentOneParag: sqlArrRate[0], 
                contentTwoImg: sqlArrText[1],
                contentTwoHead: sqlArrName[1],
                contentTwoParag: sqlArrRate[1],
                contentThreeImg: sqlArrText[2],
                contentThreeHead: sqlArrName[2],
                contentThreeParag: sqlArrRate[2], 
                contentFourImg: sqlArrText[3],
                contentFourHead: sqlArrName[3],
                contentFourParag: sqlArrRate[3],
                contentFiveImg: sqlArrText[4],
                contentFiveHead: sqlArrName[4],
                contentFiveParag: sqlArrRate[4],
                contentSixImg: sqlArrText[5],
                contentSixHead: sqlArrName[5],
                contentSixParag: sqlArrRate[5]
            });

            console.log(sqlArrImg);
            console.log(sqlArrHead);
            console.log(sqlArrParag);
      })
  })
})

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
