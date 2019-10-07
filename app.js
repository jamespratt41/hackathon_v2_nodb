const express = require('express');
// path lets us navigate the
const path = require('path');
const hbs = require('hbs');
// require the sql conection
const sql = require('./utils/sql.js')

// heroku assigns a port when it deploys via the process (environment variables - coming )
// locally this will run @ port 3000; remotely itll run whenever heroku tells it to run 
// a double pipe (||) means "or"
const port = process.env.PORT || 3000; 

const app = express();

app.use(express.static('public'));

// tell exprss to use the handlebars engine to render data

app.set('view engine', 'hbs');

// tell express to use tghe views folder to find this template
app.set('views', __dirname + '/views');

// a forward slash is the home route (same as index.html)
app.get('/', (req, res) => {
  console.log('Your on the homepage');
  // res.sendFile(path.join(__dirname + '/views/index.html'));
  res.render('home', { message : "hi there!!", anothermessage : "hi there you did it again!!"});
  // this builds localhost:3000/views/index.html
})


app.get('/users', (req, res) => {
  console.log('at the users route');

  // try to get data from data base
  sql.getConnection((err, connection) => {
    // handle errors first
    if (err) {
    return console.log(err.message);
    }

    // it works! go and get the data
    let query = `SELECT * FROM tbl_card`;

    sql.query(query, (err, rows) => {
      connection.release();
  
      if (err){
        return console.log(err.message);
      }
  
      console.log(rows);

      res.render('user', rows[0]);
    })
  })
})


app.listen(port, () => {
  console.log(`Server running at ${port}`);
});
