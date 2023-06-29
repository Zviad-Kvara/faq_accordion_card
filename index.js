const questionsArea = document.querySelectorAll(".question");
const answersArea = document.querySelectorAll(".answer");

let active = null;

Array.from(questionsArea).forEach(question => {
  question.addEventListener("click", () => {
    question.parentElement.classList.toggle("active");
    if (active) {
      active.classList.remove("active");
      console.log(active);
    }

    active = question;
  });
});
