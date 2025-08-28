const express = require('express');
const app = express();

let PORT = 5000;
// let holdServerForSomeTime = (duration) => {
//   let start = Date.now();
//   while (Date.now() - start < duration) {
//     // hold server, do nothing
//   }
// };

app.get('/', (req, res) => {
  res.send('Hlo from server');
});
app.get('/slow-page', (req, res) => {
  // holdServerForSomeTime(5000); // slow job for 5 seconds
  for (let i = 0; i < 600000000; i++) {} // CPU intensive job
  res.send('Slow Page');
});

app.listen(PORT, (err) => {
  console.log(`Server listening on port ${PORT}...`);
});
