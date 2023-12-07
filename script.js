const nameholderEL = document.getElementById("nameholder")
const inputnumEL = document.getElementById("inpcardnum")
const mondeyEL = document.getElementById("mont")
const cvvEL = document.getElementById("cvc")
const cardnameEL = document.getElementById("namefirst")
const cardnumEL = document.getElementById("cardnumber")
const dataEl = document.getElementById("day")
const cvvcodeEL = document.getElementById("cvvcode")
const datatext = document.getElementById("data")
const buuton = document.getElementById("confirm")
const erornum = document.getElementById("erornum")
let firstnameEL = "";
let num = 0;
let daytext = "";
let cvv = "";


nameholderEL.addEventListener("input",(event) =>{
            cardnameEL.innerText = event.target.value;
            firstnameEL = event.target.value;

            if(firstnameEL.length >= 20 || firstnameEL == " " ){
                alert("soso")
            }
                
            
          
            
});



inputnumEL.addEventListener("input",(event)=>{
    num = event.target.value;
    cardnumEL.innerText = event.target.value;
      cardnumEL.style.color = "#181F43"
      cardnameEL.style.display = "start"
      if(num.length > 16){
        alert("wrong")
      }

    
})

dataEl.addEventListener("input",(event)=>{
    daytext = event.target.value;
    datatext.innerText = event.target.value;
    
})
cvvEL.addEventListener("input", (event) =>{
       cvv = event.target.value;
       cvvcodeEL.innerText = event.target.value;
})


function  generit(event){
    if(num.length > 16){
        erornum.style.display = "block"
    } else if(num.length <= 16){
        erornum.style.display = "none"
    }

    if(firstnameEL.length >= 15){
        console.log("m;;")
    }

    }



