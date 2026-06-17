//closures
function counter(){
    let count = 0;
    return function(){
        count++;
        console.log(count)
    }
}

let funct = counter();
funct();
funct();
funct();

funct();
funct();
funct();
