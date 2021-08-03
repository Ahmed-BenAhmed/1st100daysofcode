const billInput = document.getElementById("bill-input");
const peopleNum = document.getElementById("people-num");

// billInput.addEventListener("onchange",(e)=>{
//     console.log(e.target.value);
// })

billInput.onchange = function(e){
    console.log(e.target.value)
}