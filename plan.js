document.addEventListener('DOMContentLoaded', () => {
    const slideshow = document.getElementById("slideshow");
    const images = ["fit2.jpeg", "fit3.webp"];
    let index = 0;
  
    // First image
    slideshow.style.backgroundImage = `url('${images[index]}')`;
  
    setInterval(() => {
      index = (index + 1) % images.length;
  
      // Fade out, change, fade in
      slideshow.style.opacity = 0;
  
      setTimeout(() => {
        slideshow.style.backgroundImage = `url('${images[index]}')`;
        slideshow.style.opacity = 0.6;
      }, 500);
  
    }, 6000); // every 6 seconds
  });
  document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("billingToggle");
    const label = document.getElementById("billingLabel");
    const badge = document.getElementById("saveBadge");
  
    const prices = [
      { id: "basicPrice", monthly: 19, yearly: 199 },
      { id: "standardPrice", monthly: 39, yearly: 399 },
      { id: "premiumPrice", monthly: 59, yearly: 599 }
    ];
  
    // Load saved state or default to yearly
    const isYearly = localStorage.getItem("billingMode") !== "monthly";
    toggle.checked = isYearly;
    updatePrices(isYearly);
  
    toggle.addEventListener("change", () => {
      const yearly = toggle.checked;
      localStorage.setItem("billingMode", yearly ? "yearly" : "monthly");
      updatePrices(yearly);
    });
  
    function updatePrices(yearly) {
      label.textContent = yearly ? "Yearly" : "Monthly";
      badge.style.display = yearly ? "inline-block" : "none";
  
      prices.forEach(plan => {
        const element = document.getElementById(plan.id);
        const amount = yearly ? plan.yearly : plan.monthly;
        const suffix = yearly ? "/yr" : "/mo";
        element.innerHTML = `$${amount}<span class="fs-6">${suffix}</span>`;
      });
    }
  });
  