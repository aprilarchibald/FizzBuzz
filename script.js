// multiple of 3, print Fizz
// multiple of 5, print Buzz
// multiple of 3 and 5, print FizzBuzz
// otherwise print the number

for(let i = 1; i <101; i++){
    if(i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz");
    } else if(i % 3 == 0){
        console.log("Fizz");
    } else if(i % 5 == 0) {
        console.log("Buzz") ;
    } else{
        console.log(i);
    }
}

