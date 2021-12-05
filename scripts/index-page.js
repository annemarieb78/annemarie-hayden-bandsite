const form = document.querySelector(".container-comment__fields");
const commentContent = document.querySelector(
  "container-comment__dynamic-content"
);

form.addEventListener("click", function (event) {
  event.preventDefault();
  const nameInput = event.target.nameInput.value;
  const commentListItem = document.createElement("li");
  commentListItem.innerText = nameInput;
  container - comment__dynamic - commentContent.appendChild(commentListItem);
  console.log("Form Submitted");
});

// form.addEventListener("keyup", (event) => {
//   event.preventDefault();
// });
