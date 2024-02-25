# To share YouTube vedios:
### Paste the link in 'vediolink.js' file
-------------
-------------
#To post something:
### Create a tezt document post(n).txt
### if there need any images then 
 go to IMAGES folder upload images.now give the image link in "images.js"
 
[ image(n).png]
[image(2)sub1.png,image(2)sub2.png]



 n=post number 




if you wnat to get the YouTube vedio link of udvas .the  open yhe webpage and go to console amd paste this code ...........


<code>
 
// Get the HTML element
var element = document.querySelector('[data-youtube-video]');

// Check if the element exists and has the attribute
if (element && element.hasAttribute('data-youtube-video')) {
    // Get the value of the data-youtube-video attribute
    var videoId = element.getAttribute('data-youtube-video');
    console.log(videoId);
} else {
    console.log('Element or attribute not found.');
}


</code>


get the id and paste it in the class.html file.
