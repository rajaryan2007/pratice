const hello = require('./hello');

console.log(hello.add(10,20));


try{
    console.log('trying to divide by zero');
    let result = hello.divide(0,0)
    console.log(result);
}catch(error){
  console.log("get error")
};
