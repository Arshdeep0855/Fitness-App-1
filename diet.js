// maintenence calorie
// ensure all elements exist before running scripts
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('calorieForm');
    const result = document.getElementById('calorieResult');
  
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const weight = parseFloat(document.getElementById('weight').value);
      const height = parseFloat(document.getElementById('height').value);
      const age = parseInt(document.getElementById('age').value);
      const activity = parseFloat(document.getElementById('activity').value);
  
      const bmr = 10 * weight + 6.25 * height - 5 * age + 5; // Mifflin-St Jeor (Male)
      const calories = Math.round(bmr * activity);
  
      result.innerHTML = `Your estimated daily calories: <span class="text-danger fw-bold">${calories}</span> kcal`;
    });
  });
  
