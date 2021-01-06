const express = require('express');
const app = express();
const port = 1234;

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded());

app.post('/api', (req, res) => {
  console.log(req.body);
  res.send('success!')
});

app.listen(port, () => {
  console.log(`Multistep Checkout is now listening at http://localhost:${port}`);
});

