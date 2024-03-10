
function formatDate(date) {
    return new Date(date).toLocaleDateString(); // Adjust formatting as needed
}

function loadTextFiles(postInfo) {
    var postsContainer = document.getElementById('posts-container');

    var sortedDates = postInfo.map(post => post.date).sort((a, b) => new Date(b) - new Date(a));

  
    console.log("Sorted Dates:", sortedDates);

    
    sortedDates.forEach(function (date) {


        var postsForDate = postInfo.filter(post => post.date === date);
        postsForDate.forEach(function (post) {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', post.filename + '.txt', true);

            xhr.onreadystatechange = function () {
                
            if (xhr.readyState === 4 && xhr.status === 200) {
                    var postContainer = document.createElement('div');
                    postContainer.className = 'post-container';
    
             

    var userContainer = document.createElement('div');
    userContainer.className = 'user-container';

    // Add user icon
    var userIcon = document.createElement('img');
    userIcon.src = userData.iconSrc; // Replace with the actual path
    userIcon.alt = 'User Icon';
    userIcon.className = 'user-icon';
    userContainer.appendChild(userIcon);

    // Add username
    var usernameElement = document.createElement('p');
    usernameElement.innerText = userData.username; 
    usernameElement.className = 'user-name';
    userContainer.appendChild(usernameElement);

                  
                    //here under container i want he datw
                    var dateElement = document.createElement('p');
                    dateElement.innerText = formatDated(date); 
                   
                  
                    dateElement.className = 'post-date';
                    userContainer.appendChild(dateElement);
                    // postContainer.appendChild(userContainer);
                
                    // Append date element to the posts container
                    postsContainer.appendChild(userContainer);
    
    
                    var lines = xhr.responseText.split('\n');
    
                    var postContent = "";
                    var showFullText = false;
    
            
                    var textElement = document.createElement('p');
    
                    lines.forEach(function (line) {
                       
    

    var imageExtensions = ['.jpeg', '.jpg', '.png', '.gif', '.bmp']; // Add more if needed
    
    
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

       
    });
}

// Call the loadTextFiles function with postInfo as an argument
loadTextFiles(postInfo);
