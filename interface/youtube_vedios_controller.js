// Your JavaScript array containing YouTube video IDs
//const videoIds = ['videoId1', 'videoId2', 'videoId3']; // Add your video IDs

// Function to create iframe for each video ID
function createVideoIframe(videoId) {
    return `
        <div>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen="true" sandbox="allow-same-origin allow-scripts allow-popups" title=""></iframe>
            <a href="https://www.youtube.com/watch?v=${videoId}" target="_blank" class="watch-on-youtube-link">Watch on YouTube</a>
        </div>
    `;
}

// Get the container element
const videoContainer = document.getElementById("videos-container");

// Use innerHTML for better performance
videoContainer.innerHTML = videoIds.map(createVideoIframe).join('');







/*

// Your JavaScript array containing YouTube video IDs
        
        // Function to create iframe for each video ID
        // Function to create iframe for each video ID
function createVideoIframe(videoId) {
    const container = document.createElement("div");
    const iframe = document.createElement("iframe");
    iframe.width = "560";
    iframe.height = "315";
    iframe.src = `https://www.youtube.com/embed/${videoId}`;
  
        
        iframe.frameborder = "0";
    iframe.allowfullscreen = true;
    iframe.sandbox = 'allow-same-origin allow-scripts allow-popups';
    iframe.title = ''; // Remove the default YouTube title

    // Create link for each video
    const videoLink = document.createElement("a");
    videoLink.href = `https://www.youtube.com/watch?v=${videoId}`;
    videoLink.target = "_blank"; // Open in a new tab
    videoLink.innerText = "Watch on YouTube";
    
    // Add a specific class to the link
    videoLink.classList.add("watch-on-youtube-link");

    // Append iframe and link to the container
    container.appendChild(iframe);
    container.appendChild(videoLink);

    return container;
}


        // Get the container element
        const videoContainer = document.getElementById("videos-container");

        // Loop through the video IDs and append iframes to the container
        videoIds.forEach(videoId => {
            const videoIframe = createVideoIframe(videoId);
            videoContainer.appendChild(videoIframe);
        });



        */

