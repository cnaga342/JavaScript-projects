const counter=document.getElementById("counter");
const incrementbtn=document.getElementById("incrementbtn");
const dicrementbtn=document.getElementById("decrementburron");
const btn=document.getElementById("reset");


let count=0;



//update count


//increment count

incrementbtn.addEventListener("click",()=>{
    counter.textContent=count++;
    
})
// decrement
dicrementbtn.addEventListener("click",()=>{
  counter.textContent=count--;
  
})
// reset
btn.addEventListener("click",()=>{
   counter.textContent=0;
  
})
