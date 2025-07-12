


function getScore(...score){
let total = 0; 
score.forEach(function(val){
    total = total +val;
});
return total;
 

}
console.log(getScore(10,20,30,40,50,60))