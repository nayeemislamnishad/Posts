
function loadTextFiles() {
    var postsContainer = document.getElementById('posts-container');

    postInfo.forEach(function (post) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', post.filename + '.txt', true);

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                var postContainer = document.createElement('div');
                postContainer.className = 'post-container';

                // Get last modified date and convert it to a readable format
                var lastModifiedDate = new Date(xhr.getResponseHeader('Last-Modified'));
                var formattedDate = lastModifiedDate.toLocaleString();

                var dateElement = document.createElement('p');
                dateElement.innerText = 'Published on: ' + formattedDate;
                postContainer.appendChild(dateElement);

                var hrElement = document.createElement('h1');
                hrElement.innerText = 'Posts........';
                postContainer.appendChild(hrElement);

                var textElement = document.createElement('p');
                textElement.innerText = xhr.responseText;
                postContainer.appendChild(textElement);

                // Check if there are images for the current post
                if (post.images && post.images.length > 0) {
                    post.images.forEach(function (imageFilename) {
                        var imageElement = document.createElement('img');
                        imageElement.src = 'IMAGES/' + imageFilename; // Adjust the path accordingly
                        imageElement.alt = 'Description of your image';
                        postContainer.appendChild(imageElement);
                    });
                }

                postsContainer.appendChild(postContainer);
            }
        };

        xhr.send();
    });
}

loadTextFiles();






/*

function loadTextFiles() {
    var postsContainer = document.getElementById('posts-container');

            

    postInfo.forEach(function (post) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', post.filename + '.txt', true);

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
            
                var postContainer = document.createElement('div');
                postContainer.className = 'post-container';

                var hrElement = document.createElement('h1');
                hrElement.innerText = 'Posts........';
                postContainer.appendChild(hrElement);

                var textElement = document.createElement('p');
                textElement.innerText = xhr.responseText;
                postContainer.appendChild(textElement);

                // Check if there are images for the current post
                if (post.images && post.images.length > 0) {
                
                    post.images.forEach(function (imageFilename) {
                    
                        var imageElement = document.createElement('img');
                        imageElement.src = 'IMAGES/' + imageFilename; // Adjust the path accordingly
                        imageElement.alt = 'Description of your image';
                        postContainer.appendChild(imageElement);
                    });
                }

                postsContainer.appendChild(postContainer);
            }
        };

        xhr.send();
    });
}

loadTextFiles();


*/
