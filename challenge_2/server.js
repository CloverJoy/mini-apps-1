const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('client'));
app.use(express.json())
app.use(express.urlencoded());

app.get('/', (req, res) => {
  res.send('Online')
});

app.post('/', (req, res) => {
  let data = JSON.parse(req.body.json);
  console.log(data);
  res.send(data);
  res.end();
});

app.listen(port, () => {
  console.log(`CSV Report generator is listening at http://localhost:${port}`);
});