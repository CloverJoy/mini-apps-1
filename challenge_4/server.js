const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('client/dist'))
app.listen(port, () => {
  console.log(`App is serving at http://localhost:${port}`);
});
