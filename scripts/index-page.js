const form = document.querySelector(".container-comment__fields");
const commentContent = document.querySelector(
  "container-comment__dynamic-content"
);
const submitButton = document.querySelector(".container-comment__button-style");
const formInput = [];

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const nameInput = document.createElement("li");
  const commentInput = document.createElement("li");
  const clickButton = event.target.submitButton.value;

  if (nameInput !== "" && commentInput !== "") {
    formInput.push({
      name: nameInput,
      comment: commentInput,
    });
    renderInput();
    event.target.reset();
  } else {
    alert("Please do not leave blank");
  }
});

function renderInput() {
  commentContent.innerHTML = "";
  formInput.forEach(function (input) {
    const nameLi = document.createElement("li");
    nameLi.innerText = input.name;
    const commentPara = document.createElement("p");
    commentPara.innerText = input.comment;

    commentContent.appendChild(nameLi);
    commentContent.appendChild(commentPara);
  });
}
