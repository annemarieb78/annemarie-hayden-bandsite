const form = document.getElementById(".container-comment__fields");

form.addEventListener("click", function (event) {
  event.preventDefault();
  console.log("Form Submitted");
});

form.addEventListener("keyup", (event) => {
  event.preventDefault();
});
