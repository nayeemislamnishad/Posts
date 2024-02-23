document.addEventListener('DOMContentLoaded', function() {
  const deadline = new Date('March 1, 2024 00:05:00').getTime();

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = deadline - now;

    const daysdu = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hoursdu = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutesdu = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const secondsdu = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('daysdu').innerHTML = daysdu + ' ' + 'days';
    document.getElementById('hoursdu').innerHTML = hoursdu + ' ' + 'hours';
    document.getElementById('minutesdu').innerHTML = minutesdu +' ' + 'minutes';
    document.getElementById('secondsdu').innerHTML = secondsdu + ' '+ 'seconds';
  }

  setInterval(updateCountdown, 1000);
});
