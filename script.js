// script.js
// Set the date of the wedding
const weddingDate = new Date("2025-03-01T16:00:00").getTime(); // Adjust to your wedding date and time

function updateCountdown() {
  const now = new Date().getTime();
  const timeLeft = weddingDate - now;

  if (timeLeft < 0) {
    document.getElementById("countdown").innerHTML = "<h2>The big day has arrived!</h2>";
    return;
  }

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
}

// Update the countdown every second
setInterval(updateCountdown, 1000);
updateCountdown();
