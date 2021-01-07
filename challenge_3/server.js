const express = require('express');
const app = express();
const port = 1234;
const db = require('./database');

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded());

app.post('/api', (req, res) => {
  console.log(req.body);
  const {customername, email, customerpassword, lineone, linetwo, city, customerstate, zipcode, phonenumber, creditcardnumber, expirydate, cvv, billingzip} = req.body;
  const sql = 'INSERT INTO customerinformation (customername, email, customerpassword, lineone, linetwo, city, customerstate, zipcode, phonenumber, creditcardnumber, expirydate, cvv, billingzip) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
  db.query(sql, [customername, email, customerpassword, lineone, linetwo, city, customerstate, zipcode, phonenumber, creditcardnumber, expirydate, cvv, billingzip], (error, results) => {
    if (error) {
      console.log(error);
      res.send(500);
    } else {
      res.sendStatus(201);
    }
  })
});

app.listen(port, () => {
  console.log(`Multistep Checkout is now listening at http://localhost:${port}`);
});

