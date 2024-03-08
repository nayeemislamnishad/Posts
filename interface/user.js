

function addUserIconAndName(userData, postContainer) {
    // Container for user icon and name
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
    usernameElement.innerText = userData.username; // Replace with the actual username
    usernameElement.className = 'user-name';
    userContainer.appendChild(usernameElement);

    // Append user container to post container
    postContainer.appendChild(userContainer);
}

// Example user data
const userData = {
    username: "Linkloop",
    iconSrc: "./interface/LinkLoop.jpeg", // Replace with the actual path
};

// Call this function for each postContainer you want to add user icon and name
// Example:
// addUserIconAndName(userData, yourPostContainer);
  
