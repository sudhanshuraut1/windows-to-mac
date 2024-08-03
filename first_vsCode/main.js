console.log("hello world"); 
const a = 1
//a = 3
console.log(a)

const firstObj  = {
      firstName : "sudhanshu",
      gender : "male"
}

console.log(firstObj["firstName"]);

function sum (a,b,fntocall){
   return fntocall(a+b);
}

function display (ans){
    return "the answer is "+ ans ;
}

console.log(sum(9,8,display));

function  greet (a){
    console.log(a);
   // a-=1;
}

//setTimeout(greet,5*1000);

console.log(greet(30));