if (require.main === module) {
  console.log('Node module wrapper demo');
  console.log('Running directly');
} else {
  console.log('Imported as a module');
}

module.exports.greet = function (name) {
  console.log(`Hello ${name}`);
};
