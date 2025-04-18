// BMI Calculator
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('progressForm');
    const resultDiv = document.getElementById('result');
    const progressBar = document.getElementById('weightProgress');
  
    // Load saved data
    const saved = JSON.parse(localStorage.getItem('progressData'));
    if (saved) {
      document.getElementById('currentWeight').value = saved.current;
      document.getElementById('targetWeight').value = saved.target;
      document.getElementById('calories').value = saved.calories;
      document.getElementById('workoutType').value = saved.workout;
    }
  
    form.addEventListener('submit', function (e) {
      e.preventDefault();
  
      const current = parseFloat(document.getElementById('currentWeight').value);
      const target = parseFloat(document.getElementById('targetWeight').value);
      const calories = document.getElementById('calories').value;
      const workout = document.getElementById('workoutType').value;
  
      const height = 1.7;
      const bmi = (current / (height * height)).toFixed(1);
      let bmiStatus = '';
  
      if (bmi < 18.5) bmiStatus = 'Underweight';
      else if (bmi < 25) bmiStatus = 'Normal';
      else if (bmi < 30) bmiStatus = 'Overweight';
      else bmiStatus = 'Obese';
  
      const progressData = { current, target, calories, workout };
      localStorage.setItem('progressData', JSON.stringify(progressData));
  
      let percent = 0;
      if (current && target) {
        percent = Math.min(100, Math.round((current / target) * 100));
        progressBar.style.width = percent + '%';
        progressBar.textContent = percent + '%';
      }
  
      let message = `
        <span class="badge bg-primary mb-2">${workout} Completed 💪</span><br>
        🎯 Current Weight: <strong>${current} kg</strong><br>
        🎯 Target Weight: <strong>${target} kg</strong><br>
        🔥 Calories Burned: <strong>${calories || 0}</strong><br>
        📊 BMI: <strong>${bmi}</strong> (${bmiStatus})
      `;
  
      resultDiv.innerHTML = message;
      resultDiv.classList.add('show');
  
      const date = new Date().toLocaleDateString();
      resultDiv.innerHTML += `<br><small>🗓️ ${date}</small>`;
    });
  });
  
