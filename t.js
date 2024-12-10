let butt=document.querySelectorAll("#b");
let newb=document.querySelector(".new");
let reset=document.querySelector(".reset");
let wins=document.querySelector(".win");
let msg=document.querySelector("#one");
let turn0=true;
const win=[
    [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
];
const rese=()=>{
    turn0=true;
    enableboxes();
    wins.classList.add("hide");
}
butt.forEach((box) => {
   box.addEventListener("click",()=>{
      if(turn0===true)
      {
        turn0=false;
        box.innerText="0";
      }
      else
      {
        turn0=true;
        box.innerText="x";
      }
      box.disabled=true;
      winner();
   }) 
       
});
const disable=()=>{
    for(let bx of butt)
    {
        bx.disabled=true;
    }
}
const enableboxes=()=>{
    for(let bx of butt)
    {
        bx.disabled=false;
        bx.innerText="";
    }
}
const showWinner=(vw)=>{
     msg.innerText="CONGRAGULATION WINNER IS "+ vw;
     wins.classList.remove("hide");
     disable();
}
const winner=()=>{
for(let w of win)
{
    let v=butt[w[0]].innerText;
    let v1=butt[w[1]].innerText;
    let v2=butt[w[2]].innerText;
    if(v!=""&&v1!=""&&v2!="")
    {
    if(v===v1&&v1===v2)
    {
        console.log("Winner");
        showWinner(v);
    }
}
}
};
newb.addEventListener("click",rese);
reset.addEventListener("click",rese);
