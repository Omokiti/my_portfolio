let i = 0;
let txt="A LITTLE ABOUT EMAMUZO OMOKITI "
let speed= 50;

function effectWriter(){
    if ( i < txt.length) {
     document.getElementById("text").innerHTML += txt.charAt(i);
     i++;
     setTimeout(effectWriter,speed);
   4000 }
}

effectWriter();

let j =0;
let text="WHAT I HAVE BEEN UP TO "
let speeds=50;
function effectWriter2(){
    if(j<text.length){
    document.getElementById('projecttext').innerHTML+=text.charAt(j);
    j++;
    setTimeout(effectWriter2,speeds);
    }
}

effectWriter2();

let k=0;
let texts="OTHER PROJECTS"
let speedz=50;

function effectWriter3(){
    if(k < texts.length){
        document.getElementById('otherprojects').innerHTML+=texts.charAt(k);
        k++;
        setTimeout(effectWriter3,speedz);
    }
}
effectWriter3();

function uptoDate(){
let date=new Date();
let currentDate=date.getFullYear();
document.getElementById('date').innerHTML=currentDate;
}
uptoDate();


