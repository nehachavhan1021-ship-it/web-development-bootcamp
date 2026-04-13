// let boxesEl=document.getElementsByClassName("boxes")
// let boxEl=document.querySelectorAll(".box")
//  function colorGanerator() {
//     let val1=Math.floor(Math.random()*255);
//     let val2=Math.floor(Math.random()*255);
//     let val3=Math.floor(Math.random()*255);
//    return `rgb(${val1},${val2},${val3})`;
    
// }

// boxEl.forEach(box => {
//     box.style.backgroundColor = colorGanerator();
//     box.style.color = colorGanerator();

// });


//another way
let boxes = document.querySelectorAll(".box")

function getRandomColor(){
    let val1 = Math.ceil(0 + Math.random()* 255);
    let val2 = Math.ceil(0 + Math.random()* 255);
    let val3 = Math.ceil(0 + Math.random()* 255);
    return `rgb(${val1}, ${val2}, ${val3})`
}
setInterval(()=>{
    Array.from(boxes).forEach(e=>{
    e.style.backgroundColor = getRandomColor()
    e.style.color = getRandomColor()
})
},100)

