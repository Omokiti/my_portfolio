let i = 0;
let txt="Frontend Developer"
let speed= 50;

function effectWriter(){
    if ( i < txt.length) {
     document.getElementById("text").innerHTML += txt.charAt(i);
     i++;
     setTimeout(effectWriter,speed);
   4000 }
}

effectWriter();
var sample=[[0,1][2,3],[4,5]];
var result = sample.reduce(function(a,b){
    return a. concat(b);


},[]);
console.log(result);

console.log(['1','2','1'].map(parseInt));




