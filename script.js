const quizDiv = document.getElementById('quiz');
const submitBtn = document.getElementById('submit');
const result = document.getElementById('result');

// ✅ Fetch from same origin (no need for localhost:3000)
fetch('/questions')
  .then(res => res.json())
  .then(questions => {
    questions.forEach((q, i) => {
      const qDiv = document.createElement('div');
      qDiv.innerHTML = `<p>${i + 1}. ${q.question}</p>`;
      q.options.forEach(opt => {
        qDiv.innerHTML += `<input type="radio" name="q${i}" value="${opt}"> ${opt} <br>`;
      });
      quizDiv.appendChild(qDiv);
    });

    submitBtn.addEventListener('click', () => {
      let score = 0;
      questions.forEach((q, i) => {
        const selected = document.querySelector(`input[name="q${i}"]:checked`);
        if (selected && selected.value === q.answer) score++;
      });
      result.textContent = `Your Score: ${score} / ${questions.length}`;
    });
  });
