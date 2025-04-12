//alert("in main.js");


const images = [
    "pic1.jpg",
    "pic2.jpg",
    "pic3.jpg",
    "pic4.jpg",
    "pic5.jpg"
]; 

const images_alt_text = [
    "Eye close up",
    "Rock cross section",
    "Pretty flowers",
    "Egyptian drawings",
    "Butterfly on leaf"
    
]; 


const thumbbar = document.querySelector(".thumb-bar")
for (const image of images) {
    var elem = document.createElement("img");
    elem.setAttribute("src", "./images/"+image);
    elem.setAttribute("alt", images_alt_text[images.indexOf(image)]);
    //elem.addEventListener("click",() => alert("clicked");
    thumbbar.appendChild(elem);

}



const button = document.querySelector("button")
button.addEventListener("click",() => darken(button))
const over = document.querySelector(".overlay")
function darken(btn){
    buttonclass = btn.getAttribute("class")

    if (buttonclass==="dark"){

        btn.setAttribute("class", "light")
        btn.textContent='Lighten'
        over.style.background='rgba(0 0 0 / 50%)'
        
    }
    else if (buttonclass ==="light"){

        btn.setAttribute("class", "dark")
        btn.textContent='Darken'
        over.style.background='rgba(0 0 0 / 0%)'
        
    }

    
}


