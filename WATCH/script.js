document.addEventListener("DOMContentLoaded", function () {
    const videoLinks = [
        "https://youtu.be/GvXDq-P1NB8?si=mKG1nAdZ5F9FddcM",
        "https://youtu.be/D4B7xO1HVEA?si=zXhEzbKm6OJxVXri",
        "https://www.youtube.com/watch?v=VIDEO_ID_3",
        // Add more video links as needed
    ];

    const videosContainer = document.getElementById("videos-container");
    displayVideos(videoLinks);
    
    function extractVideoId(link) {
        const youtubeRegex = /(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
        const match = link.match(youtubeRegex);
        return match ? match[1] : null;
    }

    function displayVideos(links) {
        links.forEach(link => {
            const videoId = extractVideoId(link);
            if (videoId) {
                const videoIframe = document.createElement("iframe");
                videoIframe.src = `https://www.youtube.com/embed/${videoId}`;
                videoIframe.width = "560";
                videoIframe.height = "315";

                videosContainer.appendChild(videoIframe);
            }
        });
    }
});
