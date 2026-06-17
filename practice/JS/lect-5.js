//closures -- A closure is a feature in JavaScript where an inner function remembers and has access to variables from its outer (enclosing) scope, 
// even after the outer function has finished executing
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
let funct2= counter();
funct2();
funct2();
funct2();

