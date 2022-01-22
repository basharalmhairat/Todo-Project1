console.log("hello");
console.log("this was my name");


var userName = prompt("whaht is your name");
console.log(userName);

var gender = prompt("enter your gender");

//if (gender = "male" )or (gender = "female") {
    
//} else {                          **i could not my (or) opration on my keporde**
//alert("invalid inbut")
//}

console.log("gender")


var age = prompt("how old are you");
console.log("age");

if (age <= 0) {
    alert("please inter a valid age" );
} else {
    alert(age);
}


var ask = prompt("do you want to skip the welcome message");
console.log(userName);
if (ask = "no" ) {

    if (gender = "male") {
        alert("Mr"+ userName );
    } else {
      alert("Ms"+ userName) ; 
    }
   
} else {
    alert("good by");
}