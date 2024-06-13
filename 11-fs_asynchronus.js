//asynchronus fs 
const { clear } = require('console');
const{readFile,writeFile} = require('fs');
//callback func
readFile('./content/first.txt','utf-8',(err,result)=>{
    if(err){
        console.log(err)
        result
    }
    const first=result;
    readFile('./content/second.txt','utf-8',(err,result)=>{
        if(err){
            console.log(err)
            result
        }
        const second=result;
        writeFile('./content/result-async.txt',`here is the result
        :${first},${second}` ,(err,result)=>{
            if(err){
                console.log(err)
                result
            }
            console.log(result)
        } )
     })
})