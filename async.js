const https = require('https');
let start = Date.now();

function performRequest() {
  https
    .request('https://www.google.com', (res) => {
      res.on('data', () => {});
      res.on('end', () => {
        console.log('process time', Date.now() - start);
      });
    })
    .end();
}

performRequest();
performRequest();
performRequest();
performRequest();
performRequest();
performRequest();
