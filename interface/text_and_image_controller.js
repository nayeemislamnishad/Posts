
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        var postContainer = document.createElement('div');
        postContainer.className = 'post-container';

        var hrElement = document.createElement('h1');
        hrElement.innerText = 'Posts........';
        postContainer.appendChild(hrElement);

        var textElement = document.createElement('p');
        textElement.innerHTML = xhr.responseText; // Use innerHTML to render HTML content
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

        // Extract and append images from the text content
        var textImages = xhr.responseText.match(/src\s*=\s*['"]([^'"]+)['"]/g);
        if (textImages) {
            textImages.forEach(function (match) {
                var src = match.match(/src\s*=\s*['"]([^'"]+)['"]/)[1];
                var imageElement = document.createElement('img');
                imageElement.src = 'IMAGES/' + src; // Adjust the path accordingly
                imageElement.alt = 'Description of your image';
                postContainer.appendChild(imageElement);
            });
        }

        postsContainer.appendChild(postContainer);
    }
};





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
