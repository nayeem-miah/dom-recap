// append li in places
// where to add
const placesUl = document.getElementById("place-parent");
// what to be added 
const li = document.createElement("li");
li.innerText = "Cox's Bazar";
// add the child
placesUl.appendChild(li);

// added a new section in main ---------------------------
const main = document.getElementById("main");
// create section
const section = document.createElement("section");

// create h2 tag and inner text added
const h2 = document.createElement("h2");
h2.innerText = "this is append  section";
h2.classList = "heading";
section.appendChild(h2)

// creating paragraph tag and append child
const p = document.createElement("p");
p.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, enim officiis dolorum repellat quos blanditiis, qui consequatur minima harum similique ut nemo sit. Doloribus, repellat illum minima id quos laboriosam?";
section.appendChild(p);

// creating button and append child in section tag
const button = document.createElement("button");
button.classList = "button";
button.innerText = "see more...";
section.appendChild(button);

main.appendChild(section);


// adding section in main container -----> innerHTML
const innerSection = document.createElement("section");
innerSection.innerHTML = `
<section>
    <h2>this is innerHTML added section </h2>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit exercitationem laboriosam unde, reprehenderit quisquam voluptates magni praesentium error quasi quidem culpa delectus quis dolore nam. Veritatis obcaecati assumenda corrupti tempora?</p>
    <br>
    <button class="button">see more</button>
</section>`;
main.appendChild(innerSection)



