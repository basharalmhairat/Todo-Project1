// console.log("hello");
// console.log("this was my name");


// var userName = prompt("whaht is your name");
// console.log(userName);

// var gender = prompt("enter your gender");

// //if (gender = "male" )or (gender = "female") {
    
// //} else {                          **i could not my (or) opration on my keporde**
// //alert("invalid inbut")
// //}

// console.log("gender")


// var age = prompt("how old are you");
// console.log("age");

// if (age <= 0) {
//     alert("please inter a valid age" );
// } else {
//     alert(age);
// }


// var ask = prompt("do you want to skip the welcome message");
// console.log(userName);
// if (ask = "no" ) {

//     if (gender = "male") {
//         alert("Mr"+ userName );
//     } else {
//       alert("Ms"+ userName) ; 
//     }
   
// } else {
//     alert("good by");
// }
var qus = [];


var q1 =prompt("are you single");

while (q1 != 'yes'&& q1 != 'no') { q1=prompt ("are you single") }
  
   console.log(q1);
    qus.push(q1);



var q2 = prompt("do you live alone ");

while (q2 != 'yes'&& q2 != 'no') { q2=prompt ("do you live alone ") }


console.log(q2);
    qus.push(q2);


var q3 = prompt("do live in jordan");
while (q3 != 'yes'&& q3 != 'no') { q3=prompt ("do live in jordan") }

console.log(q3);
    qus.push(q3);

console.log(qus)
 
for (let i = qus.length -1 ; i >= 0 ; i--) {
    console.log(qus[i]);
    
}