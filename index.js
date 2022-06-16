let screen=document.getElementById("screen");
let buttons=document.querySelectorAll("button");
for(item in buttons){
    item.addEventListener('click',(e)=>{
        buttontext=e.target.innerText;
    })
}