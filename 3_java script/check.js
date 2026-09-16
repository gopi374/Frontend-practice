
document.getElementById("mybtn").onclick = function(){
    const visabtn = document.getElementById("visabtn");
    const mastercardbtn = document.getElementById("mastercardbtn");
    const paypalbtn = document.getElementById("paypalbtn");



    if(visabtn.checked){
        console.log("you are paying with visa")
    }
    else if(mastercardbtn.checked){
        console.log("you are paying with mastercad")
    }
    else if(paypalbtn.checked){
        console.log("you are paying with paypal")
    }
    else{
        console.log("you must select any payment option !")
    }
}


document.getElementById("mybtn").onclick = function(){

    const teacherbtn = document.getElementById("teacherbtn")
    const doctbtn = document.getElementById("doctbtn")
    const consbtn = document.getElementById("consbtn")
    const jackbtn = document.getElementById("jackbtn")
    
    if(teacherbtn.checked){
        console.log("Thank you for applying as a teacher")
    }
    else if(doctbtn.checked){
        console.log("Thank you for applying as a doctor")
    }
    else if(consbtn.checked){
        console.log("Thank you for applying as a counsellor")
    }
    else if(jackbtn.checked){
        console.log("You are jack")
    }
    else{
        console.log("please select any option")
    }
}