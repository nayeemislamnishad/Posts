document.addEventListener("DOMContentLoaded", function () {
    const postsContainer = document.getElementById("posts-container");

    // Function to fetch and display all posts
    async function displayAllPosts() {
        try {
            const response = await fetch('posts/');
            if (!response.ok) {
                throw new Error(`Error fetching posts folder: Status ${response.status}`);
            }
            const fileNames = await response.json();

            fileNames.forEach(async (fileName, index) => {
                try {
                    const postResponse = await fetch(`posts/${fileName}`);
                    if (!postResponse.ok) {
                        throw new Error(`Error fetching ${fileName}: Status ${postResponse.status}`);
                    }
                    const content = await postResponse.text();

                    const postDiv = document.createElement("div");
                    postDiv.innerHTML = `<h2>Post ${index + 1}</h2><p>${content}</p>`;
                    postsContainer.appendChild(postDiv);
                } catch (error) {
                    console.error(error);
                }
            });
        } catch (error) {
            console.error(error);
        }
    }

    // Initial display
    displayAllPosts();
});
        
