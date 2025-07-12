var ans = new Promise((res,rej)=>{
    if(false){
        return res();
    }
    else{
        return rej();
    }
})

ans
  .then(function(){
    console.log("relsove")
  })
  .catch(function(){
    console.log("reject ")
  })