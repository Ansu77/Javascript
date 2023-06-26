/*
Prime

*/
var n=7
var count = 0
for(i=1; i<=n; i++){
    if(n % i == 0){
        count++
    }
}


if(n==0){
    console.log(n+ "is a whole number")
}
else if(count==2){
    console.log(n+ "is prime number")
    
}
else{
    console.log(n+ " is composite number")
}