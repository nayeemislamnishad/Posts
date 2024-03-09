
function loadTextFiles() {
    var postsContainer = document.getElementById('posts-container');

    postInfo.forEach(function (post) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', post.filename + '.txt', true);

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                var postContainer = document.createElement('div');
                postContainer.className = 'post-container';

// Extract date from the first line of the text file
             

                // Call the function to add user icon and name
                addUserIconAndName(userData, postContainer);
                
// Inside your existing code where you create a postContainer
var postContainer = document.createElement('div');
postContainer.className = 'post-container';

// Call the function to add user icon and name
addUserIconAndName(userData, postContainer);

// Continue with the rest of your existing code for post content
// ...



            //    var hrElement = document.createElement('h1');
            //    hrElement.innerText = 'Posts........';
             //  postContainer.appendChild(hrElement);

                // Split text content by lines
                var lines = xhr.responseText.split('\n');

                var postContent = "";
                var showFullText = false;

                // Declare textElement here
                var textElement = document.createElement('p');

                lines.forEach(function (line) {
                    // Check for lines containing image filenames
                    





var imageExtensions = ['.jpeg', '.jpg', '.png', '.gif', '.bmp']; // Add more if needed

// Check if the line ends with a valid image extension
if (imageExtensions.some(ext => line.trim().toLowerCase().endsWith(ext))) {
    var src = line.trim();
    var imageElement = document.createElement('img');

    imageElement.src = 'IMAGES/' + src;
    imageElement.alt = 'Description of your image';
    imageElement.style.width = '100%';
    imageElement.style.height = '200px';
    imageElement.style.objectFit = 'cover';
    imageElement.style.display = showFullText ? 'inline' : 'none';

    imageElement.onclick = function () {
        showFullText = !showFullText;
        textElement.innerHTML = showFullText ? postContent : postContent.substring(0, 100);
        toggleContentVisibility();
    };
    postContainer.appendChild(imageElement);
} else {
    // Code for non-image lines
    
    postContent += line + '<br>';
                    
}

                });




                // Display the first 50 characters of the text initially
                textElement.innerHTML = postContent.substring(0, 100);
                textElement.onclick = function () {
                    showFullText = !showFullText;
                    textElement.innerHTML = showFullText ? postContent : postContent.substring(0, 100);
                    toggleContentVisibility();
                };
                postContainer.appendChild(textElement);

                // Add "See More" and "See Less" buttons for text
                var seeMoreButton = createButton('see more...', 'inline', function () {
                    showFullText = true;
                    textElement.innerHTML = postContent;
                    toggleContentVisibility();
                });
                postContainer.appendChild(seeMoreButton);

                var seeLessButton = createButton('see less...', 'none', function () {
                    showFullText = false;
                    textElement.innerHTML = postContent.substring(0, 100);
                    toggleContentVisibility();
                });
                postContainer.appendChild(seeLessButton);

                postsContainer.appendChild(postContainer);

                function toggleContentVisibility() {
    var imageDisplayStyle = showFullText ? 'inline' : 'none';
    postContainer.querySelectorAll('img').forEach(function (img) {
        img.style.display = imageDisplayStyle;
    });

    // Add the following lines to handle user icon and name visibility
    var userIcon = postContainer.querySelector('.user-icon');
    var userName = postContainer.querySelector('.user-name');
    userIcon.style.display = 'inline';
    userName.style.display = 'inline';

    // Update the visibility of buttons based on showFullText state
    seeMoreButton.style.display = showFullText ? 'none' : 'inline';
    seeLessButton.style.display = showFullText ? 'inline' : 'none';
}


                function createButton(text, display, clickHandler) {
                    var button = document.createElement('button');
                    button.innerText = text;
                    button.style.display = display;
                    button.onclick = clickHandler;
                    return button;
                }
                
              
            }
        };

        xhr.send();
    });
}

loadTextFiles();
