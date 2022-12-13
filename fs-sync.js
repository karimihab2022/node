const {readFileSync,writeFileSync} = require('fs')

console.log("start");
const first = readFileSync('./content/first.txt','utf8')
const s = readFileSync('./content/second.txt','utf8')

writeFileSync('./content/third.txt',`${first},${s}`,{flag:'a'})
console.log("done");
console.log("next");
 