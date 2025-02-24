document.addEventListener('DOMContentLoaded', function() {
  const faqQuestions = document.querySelectorAll('.question');
  const image = document.querySelectorAll('.icon');

  faqQuestions.forEach(question => {
    question.addEventListener('click', function() {
      const answer = this.nextElementSibling;
      const image = this.querySelector('.icon');
      if (answer.style.display === 'none' || answer.style.display === '') {
        answer.style.display = 'block';
        image.src = '/assets/images/icon-minus.svg';
      } else {
        answer.style.display = 'none';
        image.src = '/assets/images/icon-plus.svg';
      };
    });
  });
});