var ans = new Promise((res,rej)=>{
    var n = Math.floor(Math.random()*10);
    if(n<=5){
        return res();
    }
    else{
        return rej();
    }
})


ans.then(function(){
    console.log("below")
})
.catch(function(){
    console.log("above")
})