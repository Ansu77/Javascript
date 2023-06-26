/*
function
function is reusable block of code which performs spacific task

suntax;

 //functoin declaration
finction function_(){
    //body of function
}

// function call
function_name()

*/

function welcome(name , address) {
    var G_Text = " Good Moarning " + name + " Welcome to " + address

    console.log(G_Text);
}
// welcome("Ram" , "Satdobato")

// welcome()

// function sum() {
//     var a = 20
//     var b = 30
//     var sum = a + b;
//     console.log(sum)
// }
// sum()


function add(num1, num2){//parameter
    var sum = num1 + num2;
    console.log(sum)

}
// add(25 , 46)//argument
// add(45 , 34)

// function multiply(){
//     var a = 5;
//     var b = 7;
//     var multi = a * b;
//     console.log(multi)
// }
// multiply()

var wel = function(){
    console.log("welcome");
}

console.log(typeof(wel))
wel()