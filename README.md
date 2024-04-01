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




     <script>
 

 
                                  var element = document.querySelector('[data-youtube-video]');

      if (element && element.hasAttribute('data-youtube-video')) {
       var videoId = element.getAttribute('data-youtube-video');
     var youtubeLink = 'https://www.youtube.com/watch?v=' + videoId;
    var anchor = document.createElement('a');
    anchor.href = youtubeLink;
    anchor.textContent = 'Click here to watch the video';
    element.appendChild(anchor);
      } else {
    console.log('Element or attribute not found.');
      }

     
     
     </script>









--------





<script>
       
 
 
 
              
          var element = document.querySelector('[data-youtube-video]');
if (element && element.hasAttribute('data-youtube-video')) {
  var videoId = element.getAttribute('data-youtube-video');
  var youtubeLink = 'https://www.youtube.com/watch?v=' + videoId;
  var anchor = document.createElement('a');
  anchor.href = youtubeLink;
  anchor.textContent = 'Click here to watch the video';
  element.appendChild(anchor);
} else {
  console.log('Element or attribute not found.');
 }
 
</script>




get the id and paste it in the class.html file.


------------------
-------------------


# ../interface/text_and_image_controller.js
