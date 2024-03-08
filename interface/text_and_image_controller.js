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
