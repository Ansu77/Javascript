/*
conditional operator in javascript

syntax;

condition ? <body_of_truth> ; <body_of_fasle>
*/

var n = 100
n >= 50
    ? n < 75
        ? console.log(n, "is greater then 50 and 75")
        : console.log(n, "is less then 50 and less then 75")

    : console.log(n, "is less then 100")