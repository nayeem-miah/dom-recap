// console.log("hello form dom");
// console.log(document.body);
const className = document.getElementsByClassName("importance-places");
// console.log(className);

// find id
const getId = document.getElementById("places-title");
// set innerHTML
const SetHTML = getId.innerHTML = `<h1 class="places-title">change text</h1>`
// set innerText
const setInnerText = getId.innerText = "this is new added tour place";
