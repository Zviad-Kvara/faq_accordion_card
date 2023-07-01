const questionsArea = document.querySelectorAll(".question");

questionsArea.forEach(question => {
  question.addEventListener("click", () => {
    question.parentElement.classList.toggle("active");
    questionsArea.forEach(question1 => {
      if (question != question1) {
        question1.parentElement.classList.remove("active");
      }
    });
  });
});


