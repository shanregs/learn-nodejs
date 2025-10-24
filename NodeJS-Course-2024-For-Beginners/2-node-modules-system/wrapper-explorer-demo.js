const we = require('./wrapper-explorer');

if (require.main === module) {
  console.log('Running directly');

  console.log('__filename in ', __filename);
  console.log('__dirname in ', __dirname);
  console.log('IN wrapper explorer demo file');
} else {
  console.log('Imported as a module');
}

we.greet('Shanmugham');
