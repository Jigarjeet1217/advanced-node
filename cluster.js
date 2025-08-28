const cluster = require('cluster');
const express = require('express');
const os = require('os');
const app = express();

let PORT = 5000;
// let holdServerForSomeTime = (duration) => {
//   let start = Date.now();
//   while (Date.now() - start < duration) {
//     // hold server, do nothing
//   }
// };

if (cluster.isPrimary) {
  console.log(`Master ${process.pid} is running...`);

  console.log('total cpus ', os.cpus().length);

  // creating workers, 2 workers created
  cluster.fork();
  cluster.fork();
} else {
  console.log(`Worker ${process.pid} started...`);
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
}
