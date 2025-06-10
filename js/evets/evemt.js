function makeLight() {
    document.body.style.backgroundColor = "white"
    document.body.style.color = "black"
}
function makeDark() {
    document.body.style.backgroundColor = "black"
    document.body.style.color = "gray"
}

// make pink color
const pinkButton = document.getElementById("make-pink");
pinkButton.addEventListener("click",makePink)


function makePink() {
    document.body.style.backgroundColor = "pink"
}

// make dark color
const darkButton = document.getElementById("make-gray");
darkButton.addEventListener("click", function makeGray() {
    document.body.style.backgroundColor = "gray"
})

// final option
document.getElementById('make-golden-rod').addEventListener("click", function () {
    document.body.style.backgroundColor = "goldenrod"
})



// onclick function 
  function handleOnclick (){
            const onclickButton = document.getElementById("handler-status-onclick");
            onclickButton.innerText = "onclick button clicked add event listener"
};

// add event listener
const clickedButton = document.getElementById("handleOnclick").addEventListener("click", function () {
    const text = document.getElementById("handler-status");
    text.innerText = "added text by addEventListener"
})

// share your comments
document.getElementById('post-btn').addEventListener("click", function () {
    // get text area value 
    const textAreaValue = document.getElementById("input-textarea");
    const textValue = textAreaValue.value;

    // set comment
    const commentContainer = document.getElementById("comments-container");
    // create p and br tag
    const p = document.createElement("p");
    p.innerText = textValue;
    const br = document.createElement("br");
    // append p and br tag 
    commentContainer.appendChild(br);
    commentContainer.appendChild(p);
    // clear text area
    textAreaValue.value = "";

})