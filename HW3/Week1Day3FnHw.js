
// Functions
// 1
function summation(n){
    let sum=0;
    for (let i=1; i<=n; i++){
        sum=sum+i;
    }
    return sum;
}
// Try: summation(5) => 1+2+3+4+5=15
console.log(summation(5));

// 2
function summationEven(n){
    let sum=0;
    for (let i=1; i<=n; i++){
        if(i%2 == 0){
        sum=sum+i;
    }
    }
    return sum;
}

// Try: summationEven(5) => 2+4=6
console.log(summationEven(5));