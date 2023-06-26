/*
0
1
1
2
3
4
5
13
*/
var a = 0
var b = 1
var n = 10
if (n == 1) {
    console.log(0)

}
else if (n == 2) {
    console.log(0)
    console.log(1)
}
else {
    console.log(0)
    console.log(1)
    for (i = 3; i <= n; i++) {
        var c = a + b;
        a = b;
        b = c;
        console.log(c)
    }
}