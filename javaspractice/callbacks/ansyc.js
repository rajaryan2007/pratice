
function delayFn(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function delayedGreet(name) {
    await delayFn(4000); // waits for 4 seconds
    console.log(name);
}

delayedGreet("sanGam");

async function division(num1,num2){
    try{
      if(num2===0)throw new Error('can not divide by 0')
        return num1/num2;
    }catch(error){
        console.error('error',error)
        return null

    }
}

async function mainFn(){
    console.log(await division(10,10));
}
mainFn();