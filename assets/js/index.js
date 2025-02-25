document.addEventListener('DOMContentLoaded', function() {
  const faqQuestions = document.querySelectorAll('.question');
  const image = document.querySelectorAll('.icon');

  faqQuestions.forEach(question => {
    question.addEventListener('click', function() {
      const answer = this.nextElementSibling;
      const image = this.querySelector('.icon');
      if (answer.style.display === 'none' || answer.style.display === '') {
        answer.style.display = 'block';
        image.src = '../images/icon-minus.svg';
        image.alt = 'icon minus';
      } else {
        answer.style.display = 'none';
        image.src = '../images/icon-plus.svg';
        image.alt = 'icon plus';
      };
    });
  });
});