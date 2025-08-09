let input=document.querySelector(".input");
let btn=document.querySelector(".btn");
let listTask=document.getElementById("list")
btn.addEventListener("click",
    function addlist(){
    let list=input.value.trim();
    if(input.value===""){
        alert("please enter text")
    } else{
      let li=document.createElement("li");
    li.textContent= list;
    // li.style.padding="2px";
    // li.style.color="red";
    // li.style.backgroundColor="blue"
    console.log(li);

    document.querySelector("ul").append(li);
    // let ul=document.createElement("ul");
    // ul.append(li);

    input.value="";
    }
    
    
})


//  btn.addEventListener("click", addlist){
        
//     }