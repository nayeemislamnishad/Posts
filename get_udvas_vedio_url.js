var element = document.querySelector('[data-youtube-video]');
if (element && element.hasAttribute('data-youtube-video')) {
   var videoId = element.getAttribute('data-youtube-video');
   var youtubeLink = 'https://www.youtube.com/watch?v=' + videoId;
   var anchor = document.createElement('a');
   anchor.href = youtubeLink;
   anchor.textContent = 'Click here to watch the video';
   element.appendChild(anchor);
  }
else {
console.log('Element or attribute not found.');
  }
