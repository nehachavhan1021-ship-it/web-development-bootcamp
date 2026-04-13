

function cardganerator(title, cName, views, monthsOld, duration, thumbnail){

let viewStr
    if (views < 1000) {
        viewStr = views;
    }
    else if (views > 1000000) {
        viewStr = (views / 1000000).toFixed(1) + "M";
    }
    else {
        viewStr = (views / 1000).toFixed(1) + "K";
    }
  
let html=`<div class="cardcontainer">
     <div class="image">
        <img src="${thumbnail}" alt="" />
        <div class="capsule">${duration}</div>
      </div>
      <div class="text">
        <h2>
          ${title}
        </h2>

        <p>${cName} . ${viewStr} views . ${monthsOld} months ago</p>
      </div>
    </div> `
    document.querySelector(".card").innerHTML+=html
}
    cardganerator("nehs","hdsjdhwd",2344454,3,"23","/netflix-clone/assests/41GynUOtS8L.jpg")





    

