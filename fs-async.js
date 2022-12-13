const {readFile,writeFile} = require('fs')

console.log("start");

readFile('./content/first.txt',(err,res)=>{
    if(err){
        console.log(err);
        return
    }
const first=res

readFile('./content/second.txt',(err,res)=>{
    if(err){
        console.log(err);
        return
    }
   const s=res 

   writeFile('./content/third.txt','over2',(err,res)=>{
    if(err){
        console.log(err);
        return
    }
    console.log("done")
   })
})
})

console.log("next")
