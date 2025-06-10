// styling in css
const foodTittle = document.getElementsByClassName("food-title");

for (const title of foodTittle) {
    title.style.fontSize = "24px";
    title.style.textAlign = "center";
    title.style.color = "red";
    title.style.padding = "5px 4px";
}
// styling food-paragraph
const foodParagraph = document.getElementsByClassName("paragraph");
for (const paragraph of foodParagraph) {
    paragraph.style.fontSize = "16px";
    paragraph.style.color = "green";
    paragraph.style.padding = "2px";
}

// styling button 
const findButton = document.querySelectorAll(".button");
for (const button of findButton) {
    button.style.padding = "6px";
    button.style.backgroundColor = "green";
    button.style.color = "white";
    button.style.marginTop = "10px";
};

// styling cart-container
const cartContainer = document.getElementsByClassName("cart-container");
for (const cart of cartContainer) {
    cart.style.padding = "8px";
    cart.style.boxShadow = "10px";
    cart.style.border = "2px solid green";
    cart.style.borderRadius = "10px";
    cart.style.margin = "10px";
}

// styling main container
const mainContainer = document.getElementById("main-container");
// mainContainer.style.display = "flex";
mainContainer.style.backgroundColor = "rgb(245, 252, 246)"
mainContainer.style.padding = "10px"



// styling footer 
const footerContainer = document.querySelector("#footer-container");
footerContainer.classList.remove("footer-lorem");
// console.log(footerContainer.parentNode.parentNode);

// select all section 
const sections = document.querySelectorAll("section");
for (const section of sections) {
    section.style.border = "2px solid gray"
    section.style.marginTop = "4px";
}


const placesContainer = document.getElementById("importance-places-container");
placesContainer.classList.add("yellow-bg");