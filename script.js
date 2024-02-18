document.addEventListener("DOMContentLoaded", function () {
    const postsContainer = document.getElementById("posts-container");

    // Function to fetch and display posts
    function displayPosts() {
        // Assuming text files are named as post1.txt, post2.txt, etc.
        for (let i = 1; i <= 5; i++) {  // Adjust the range based on your needs
            fetch(`posts/post${i}.txt`)
                .then(response => response.text())
                .then(content => {
                    const postDiv = document.createElement("div");
                    postDiv.innerHTML = `<h2>Post ${i}</h2><p>${content}</p>`;
                    postsContainer.appendChild(postDiv);
                })
                .catch(error => console.error(`Error fetching post${i}.txt:`, error));
        }
    }

    // Initial display
    displayPosts();
});
