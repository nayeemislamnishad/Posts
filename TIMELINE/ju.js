document.addEventListener('DOMContentLoaded', function() {
  const deadline = new Date('February 28, 2024 00:05:00').getTime();

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = deadline - now;

    const daysju = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hoursju = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutesju = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const secondsju = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('daysju').innerHTML = daysju + ' ' + 'days';
    document.getElementById('hoursju').innerHTML = hoursju + ' ' + 'hours';
    document.getElementById('minutesju').innerHTML = minutesju +' ' + 'minutes';
    document.getElementById('secondsju').innerHTML = secondsju + ' '+ 'seconds';
  }

  setInterval(updateCountdown, 1000);
});
