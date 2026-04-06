let button=document.getElementById("btn")
// https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events
button.addEventListener("click",()=>{
    document.querySelector(".box").innerHTML="you were clicked";

})
document.addEventListener("keydown", (e)=>{
    console.log(e, e.key, e.keyCode)
})


