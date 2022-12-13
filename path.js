const path = require('path')


console.log(path.sep);

const filePath= path.join('/content','sub','test.txt')
console.log(filePath);

console.log(path.basename(filePath));



 const absolute = path.resolve(__dirname,'mind.js')

 console.log(absolute);