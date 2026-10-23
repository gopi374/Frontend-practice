document.getElementById("sub-btn").onclick = function(){
    let temp;


    if(document.getElementById("cbtn").checked){
        temp = document.getElementById("txt")
        temp = Number(temp);
        temp = tocelcius('temp');
        document.getElementById("templbl").innerHTML = temp + "c";
    }
    else if(document.getElementById("fbtn").checked){
        temp = document.getElementById("txt")
        temp = Number(temp);
        temp = toferenhiet(temp);
        document.getElementById("templbl").innerHTML = temp + "f";
    }
    else{
        document.getElementById("templbl").innerHTML = "select any unit !" 
    }
}


function tocelcius(){
    return (temp - 32)*(5/9);
}
function toferenhiet(){
    return temp + 32;
}
