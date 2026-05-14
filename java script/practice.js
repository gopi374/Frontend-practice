let  count = 0;

document.getElementById("decreasebtn").onclick = ()=>{

    count -=1;
    document.getElementById("countlabel").innerHTML= count;
    console.log(count)
}
document.getElementById("increasebtn").onclick = function(){

    count +=1;
    document.getElementById("countlabel").innerHTML= count;
    console.log(count)

}
document.getElementById("resetbtn").onclick = function(){

    count =0;
    document.getElementById("countlabel").innerHTML= count;
    console.log(count)

}