const fm = require('./first-module')

console.log(fm.add(1,2))

try{
    let r = fm.divide(1,10)
    console.log(r, "result");
}catch(error ){
    console.log(error.message)
}