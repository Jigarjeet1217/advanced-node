const { pbkdf2 } = require('crypto');
let start = Date.now();

process.env.NUMBER_OF_PROCESSORS = 4;

let cb = (seq) => {
  return () => console.log(seq, Date.now() - start);
};

pbkdf2('a', 'b', 100000, 512, 'sha512', cb(1));
pbkdf2('a', 'b', 100000, 512, 'sha512', cb(2));
pbkdf2('a', 'b', 100000, 512, 'sha512', cb(3));
pbkdf2('a', 'b', 100000, 512, 'sha512', cb(4));
pbkdf2('a', 'b', 100000, 512, 'sha512', cb(5));
