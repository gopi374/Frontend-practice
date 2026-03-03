/// switch function
document.getElementById("mybtn").onclick = function(){

    let grade = document.getElementById("text").value;

    switch(grade.toUpperCase()){
    case "A ":
        console.log("you did excellent");
        break;
    case "B":
        console.log("You did nice")
        break;
    case "C":
        console.log("you are good")
        break;
    case "D":
        console.log("not bad")
        break;
    case "E":
        console.log("average")
        break;
    default:
        console.log(grade," is not between this")
    }
}
