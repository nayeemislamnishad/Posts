document.addEventListener('DOMContentLoaded', function() {
  const deadline = new Date('March 5, 2024 00:05:00').getTime();

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = deadline - now;

    const daysru = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hoursru = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutesru = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const secondsru = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('daysru').innerHTML = daysru + ' ' + 'days';
    document.getElementById('hoursru').innerHTML = hoursru + ' ' + 'hours';
    document.getElementById('minutesru').innerHTML = minutesru +' ' + 'minutes';
    document.getElementById('secondsru').innerHTML = secondsru + ' '+ 'seconds';
  }

  setInterval(updateCountdown, 1000);
});
