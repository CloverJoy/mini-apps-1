const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('client'));
app.use(express.json())
app.use(express.urlencoded());

app.get('/', (req, res) => {
  res.send('Online')
});

const jsonToCSV = (json) => {
  let result = '';
  for (key in json) {
    if (key !== 'children') {
      result += `${key}, `
    }
  }
  result = result.slice(0, -2);
  const flatten = (obj) => {
    result += '\n';
    for (const [key, value] of Object.entries(obj)) {
      if (Array.isArray(value) && value.length !== -1) {
        for (child of value) {
          flatten(child);
        }
      }
      if (!Array.isArray(value)) {
        result += `${value}, `;
      }
    };
    result = result.slice(0, -2).replace('0,', 0);
  }
  flatten(json);
  return result.replace('0,', '0');
};

app.post('/', (req, res) => {
  let data = JSON.parse(req.body.json);
  console.log(jsonToCSV(data));
  res.send(jsonToCSV(data));
});

app.listen(port, () => {
  console.log(`CSV Report generator is listening at http://localhost:${port}`);
});