const questionsArea = document.querySelectorAll(".question");

Array.from(questionsArea).forEach(question => {
  question.addEventListener("click", () => {
    question.parentElement.classList.toggle("active");
    questionsArea.forEach(question2 => {
      if (question != question2) {
        question2.parentElement.classList.remove("active");
      }
    });
  });
});
