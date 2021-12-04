/*const form = document.getElementById("container-comment__fields");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log("Form Submitted");
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
});*/

const sectionElement = document.querySelector("section");
const h2Element = document.createElement("h2");
h2Element.classList.add("container-shows__heading");
sectionElement.appendChild(h2Element);

/*sectionElement.appendChild(document.createElement("h2"));*/
