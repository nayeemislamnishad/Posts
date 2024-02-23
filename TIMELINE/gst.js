document.addEventListener('DOMContentLoaded', function() {
  const deadline = new Date('April 27, 2024 00:05:00').getTime();

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = deadline - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').innerHTML = days + ' ' + 'days';
    document.getElementById('hours').innerHTML = hours + ' ' + 'hours';
    document.getElementById('minutes').innerHTML = minutes +' ' + 'minutes';
    document.getElementById('seconds').innerHTML = seconds + ' '+ 'seconds';
  }

  setInterval(updateCountdown, 1000);
});
