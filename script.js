document.addEventListener("DOMContentLoaded", function () {
    const postsContainer = document.getElementById("posts-container");

    // Function to fetch and display posts
    function displayPosts() {
    for (let i = 1; i <= 2; i++) {  // Assuming you have post1.txt and post2.txt
        (function (postNumber) {
            const xhr = new XMLHttpRequest();
            xhr.open("GET", `posts/post${postNumber}.txt`, true);
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    const postDiv = document.createElement("div");
                    postDiv.innerHTML = `<h2>Post ${postNumber}</h2><p>${xhr.responseText}</p>`;
                    postsContainer.appendChild(postDiv);
                } else if (xhr.status != 200) {
                    console.error(`Error fetching post${postNumber}.txt: Status ${xhr.status}`);
                }
            };
            xhr.send();
        })(i);
    }
}


    // Initial display
    displayPosts();
});
                        
