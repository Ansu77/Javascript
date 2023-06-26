/*   
3. if else if else
if (condition1){
    //body of condition 1
}

else if (condition 2){
    //body of condition 2
}

else if(condition 3){
    //body of condition 3
}



else if(condition n){
    //body of conditiion n
}

else{
    //defult block
}

*/


var number = 21


if (number % 3 == 0 && number %7 == 0) {
    console.log(number, "is divisible by 3 and 7 ")
}
else if (number % 3 == 0){
    console.log(number, "is divisible by 3")
}
else if (number % 7 == 0) {
    console.log(number, " is divisible by 7 ")
}
else {
    console.log(number, " is not divisible by 3 anf 7 ")
}


var number = 50

if (number % 2 == 0 ){
    console.log(number, "is even number")
}
else if (number % 2 !=0){
    console.log(number,"is odd number")
}
else {
    console .log(number, "is not a number")
}


var Math = 95
var Nepali = 80
var Science = 89
var Social = 90
var English = 99
if (Math >= 35 && Nepali >= 35 && Science >= 35 && Social >= 35 && English >= 35){
    console.log("COngralutation")
    var per = ((Math + Nepali + Science + Social + English) / 500) * 100
    if (per >=80){
        console.log("you got distintion")
        console.log("Your percentage is;",per)
    }
    else if( per < 80 && per >=60) {
        console.log("You got first division")
        console.log("Your percentage is;",per)
    }

    if(per <60 && per >= 45) {
        console.log("You got second division")
        console.log("Your percentage is;",per)

    }
    else if (per < 45) {
        console.log("You got third division")
        console.log("Your percentage is;",per)
        
    }
}
else{
    console.log("Try again")
}