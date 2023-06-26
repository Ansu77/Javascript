/*
var number = 9 
square , cube , square root
var square = Math.pow(number, 2)
var square root = Math sqrt(number)

*/


function square() {
    var sq = Math.pow(number, 2)
    console.log(sq)
}

function square_cube() {
    var sc = Math.pow(number, 3)
    console.log(sc)
}
function square_root() {
    var sr = Math.sqrt(number)
    console.log(sr)
}

var number = 9
Condition = "sr"

switch (Condition) {
    case "*":
        square()
        break

    case "sc":
        square_cube()
        break

    case "sr":
        square_root()
        break

    default:
        console.log("Invalid")



}








