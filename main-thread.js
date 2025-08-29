const express = require('express');
const { Worker } = require('worker_threads');
const app = express();

let PORT = 5000;

app.get('/', (req, res) => {
  res.send('Hlo from server');
});
app.get('/slow-page', (req, res) => {
  const worker = new Worker('./worker_threads.js');

  worker.on('message', (j) => {
    res.send('Slow Page ' + j);
  });
});

app.listen(PORT, (err) => {
  console.log(`Server listening on port ${PORT}...`);
});
