const express = require('express');
const cluster = require('cluster');
const app = express();

let PORT = 5000;
let holdServerForSomeTime = (duration) => {
  let start = Date.now();
  while (Date.now() - start < duration) {
    // hold server, do nothing
  }
};

// check if current process is master or not
// if not master child process will be spawned
if (cluster.isPrimary) {
  // fork the processes, u can create multiple child process
  cluster.fork();
  cluster.fork();
  cluster.fork();
} else {
  app.get('/', (req, res) => {
    holdServerForSomeTime(5000);
    res.send('Hlo from server');
  });
  app.get('/fast', (req, res) => {
    res.send('This process is Faster!');
  });

  app.listen(PORT, (err) => {
    console.log(`Server listening on port ${PORT}...`);
  });
}
