// console.log("hello form dom");
// console.log(document.body);


// 1. getElementById -------------------------

// getElementById deya change fruits title
const fruitsTitle = document.getElementById("fruits-title");
const changeNewTitle = fruitsTitle.innerText = "changed fruits title JS"


// get id  ---> 
const domSection = document.getElementById("dom-section");
// console.log(domSection); /// --->  get code 

// find id
const getId = document.getElementById("places-title");
// set innerHTML
const SetHTML = getId.innerHTML = `<h1 class="places-title">change text</h1>`
// set innerText
const setInnerText = getId.innerText = "this is new added tour place";



// 2. getElementsByClassName ---------using in class name---------------
const className = document.getElementsByClassName("importance-places");
// console.log(className);

// get class  ---> 
const domSectionClassname = document.getElementsByClassName("dom-section-class");
// console.log(domSectionClassname); /// ---> get array


const importancePlaces = document.getElementsByClassName("importance-places");
for (const place of importancePlaces) {
    // console.log(place.innerText);
}

// 3. getElementsByTagName   -----> find tag name ------------------------
const h1TagName = document.getElementsByTagName("h1");
// console.log(h1TagName);  //console ----------> array like object-->you can find every single element then you should for of loop
for (const h1 of h1TagName) {
    // console.log(h1.innerText);
}



// 4. querySelectorAll -----------> query data  find ID
const queryId = document.querySelectorAll("#fruits-title");
// console.log(queryId);
// find class
const queryClasses = document.querySelectorAll(".importance-places-container li");
// console.log(queryClasses);

for (const queryClass of queryClasses) {
    // console.log(queryClass);
};



// 5. using querySelector --> get first element 
const querySelector = document.querySelector(".importance-places-container li");
// console.log(querySelector.innerText);





// set css in js ----------

const findFruitsTitle = document.getElementById("fruits-title");
findFruitsTitle.style.fontSize = "24px";

const handleClick = () => {
const styleCss = document.getElementById("fruits-title");
    // const addCss = styleCss.style.backgroundColor = "gray";
    
}