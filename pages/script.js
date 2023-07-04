javascript
const calculateBtn = document.getElementById('calculate-btn');
const resultDiv = document.getElementById('result');

calculateBtn.addEventListener('click', () => {
  let total = 0;
  for (let i = 1; i <= 6; i++) {
    const grade = parseInt(document.getElementById(`grade${i}`).value);
    if (!isNaN(grade)) {
      total += grade;
    }
  }
  const percent = (total / 60) * 100;
  const message = `النتيجة النهائية: ${percent.toFixed(2)}%`;
  resultDiv.textContent = message;
});