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
    thumbbar.appendChild(elem);
}