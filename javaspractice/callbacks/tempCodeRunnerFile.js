fs.readFile('input.txt','utf8',(err,data)=>{
    if(err){
        console.error('errro reding file', err)
        return;
        
    }
    console.log(data);
})