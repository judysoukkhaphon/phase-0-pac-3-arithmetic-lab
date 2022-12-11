function add(a,b){
    var x = a + b;
    return x;
}

function subtract(a,b){
    var x = a - b;
    return x;
}

function divide(a,b){
    var x = a/b;
    return x;
}

function multiply(a, b){
    var x = a*b;
    return x;
}

function increment(n){
    n++;
    return n;
}

function decrement(n){
    n--;
    return n;
}

function makeInt(string){
    string = parseInt(string, 10);
    return string;
}

function preserveDecimal(n){
    n = parseFloat(n);
    return n;
}