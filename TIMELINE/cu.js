document.addEventListener('DOMContentLoaded', function() {
  const deadline = new Date('March 2, 2024 00:05:00').getTime();

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = deadline - now;

    const dayscu = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hourscu = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutescu = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const secondscu = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('dayscu').innerHTML = dayscu + ' ' + 'days';
    document.getElementById('hourscu').innerHTML = hourscu + ' ' + 'hours';
    document.getElementById('minutescu').innerHTML = minutescu +' ' + 'minutes';
    document.getElementById('secondscu').innerHTML = secondscu + ' '+ 'seconds';
  }

  setInterval(updateCountdown, 1000);
});
