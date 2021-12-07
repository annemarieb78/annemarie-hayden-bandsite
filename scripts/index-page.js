window.onload = function () {
  const form = document.getElementsByClassName("container-comment__fields")[0];
  const commentContent = document.getElementsByClassName(
    "container-comment__dynamic-content"
  )[0];

  const seedData = [
    {
      name: "Miles Acosta",
      date: "12/20/2020",
      comment:
        "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
    },
    {
      name: "Emilie Beach",
      date: "01/09/2021",
      comment:
        "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
    },
    {
      name: "Connor Walton",
      date: "02/17/2021",
      comment:
        "This is art.  This is inexplicable magic expressed in the purest way, everytyhing that makes up this majestic work deserves reverence.  Let us apprecitate this for what it is and what it contains.",
    },
  ];

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const nameInput = document.getElementsByClassName("name-input")[0].value;
    const commentInput =
      document.getElementsByClassName("comment-input")[0].value;

    const newComment = {
      name: nameInput,
      comment: commentInput,
      date: Date.now(),
    };

    renderInput(newComment);
  });

  function renderInput(input) {
    const nameH3 = document.createElement("h3");
    nameH3.innerText = input.name;
    const dateH4 = document.createElement("h4");
    dateH4.innerText = input.date;
    const commentPara = document.createElement("p");
    commentPara.innerText = input.comment;

    commentContent.prepend(commentPara);
    commentPara.classList.add("comment-paragraph");
    commentContent.prepend(dateH4);
    dateH4.classList.add("comment-date");
    commentContent.prepend(nameH3);
    nameH3.classList.add("comment-name");
  }

  seedData.forEach(function (input) {
    renderInput(input);
  });
};
