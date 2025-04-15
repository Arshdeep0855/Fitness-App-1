document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('workoutForm');
    const result = document.getElementById('planResult');
    const downloadBtn = document.getElementById('downloadPDF');
    const pdfWrapper = document.getElementById('pdfWrapper');
    const pdfContent = document.getElementById('pdfContent');
  
    const goalSelect = document.getElementById('goal');
    const levelSelect = document.getElementById('level');
    const styleSelect = document.getElementById('style');
  
    // Restore saved selections
    goalSelect.value = localStorage.getItem('goal') || '';
    levelSelect.value = localStorage.getItem('level') || '';
    styleSelect.value = localStorage.getItem('style') || '';
  
    form.addEventListener('submit', function (e) {
      e.preventDefault();
  
      const goal = goalSelect.value;
      const level = levelSelect.value;
      const style = styleSelect.value;
  
      // Save selections to localStorage
      localStorage.setItem('goal', goal);
      localStorage.setItem('level', level);
      localStorage.setItem('style', style);
  
      if (!goal || !level || !style) {
        result.innerHTML = `<div class="alert alert-warning">Please fill all fields before generating a plan.</div>`;
        return;
      }
  
      let gif = '';
      let plan = `<div class="alert alert-danger workout-plan animated fadeIn text-start mx-auto" style="max-width: 700px;">`;
  
      if (goal === 'fatloss') {
        plan += `🔥 <strong>Fat Loss:</strong> 30 mins HIIT, 15 mins cardio, 3x/week strength`;
        gif = 'fatloss.gif';
      } else if (goal === 'muscle') {
        plan += `💪 <strong>Muscle Gain:</strong> Push-Pull-Legs, 5x/week split, compound lifts`;
        gif = 'muscle.gif';
      } else if (goal === 'endurance') {
        plan += `🏃‍♂️ <strong>Endurance:</strong> Cardio + circuits 4–5x/week, long runs weekends`;
        gif = 'endurance.gif';
      }
  
      if (style === 'home') {
        plan += `<br>🏠 Style: Home-based — resistance bands & bodyweight moves`;
      } else if (style === 'gym') {
        plan += `<br>🏋️ Style: Gym-based — machines + free weights`;
      } else {
        plan += `<br>💪 Style: Bodyweight-focused workouts`;
      }
  
      if (level === 'beginner') {
        plan += `<br>🌱 Beginner — 3x/week full-body sessions`;
      } else if (level === 'intermediate') {
        plan += `<br>⚡ Intermediate — 4–5x/week, structured split`;
      } else {
        plan += `<br>🔥 Advanced — supersets, progressive overload, 5–6x/week`;
      }
  
      plan += `<div class="text-center mt-3"><img src="${gif}" alt="Workout Preview" width="300" class="img-fluid rounded"></div>`;
      plan += `</div>`;
  
      result.innerHTML = plan;
    });
  
    // PDF Download Logic
    downloadBtn.addEventListener('click', () => {
      if (!result.innerHTML.trim()) {
        alert('Please generate a plan first!');
        return;
      }
  
      // Copy content into the hidden PDF wrapper
      pdfContent.innerHTML = result.innerHTML;
  
      const opt = {
        margin: 0.5,
        filename: 'FitRegion_Workout_Plan.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
      };
  
      html2pdf().from(pdfWrapper).set(opt).save();
    });
  });
  