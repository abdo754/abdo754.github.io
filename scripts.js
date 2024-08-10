// Simulate a simple user sign-up process
document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const user = {
        username: username,
        email: email,
        password: password
    };

    // Save user data to localStorage (simulating a backend)
    localStorage.setItem('user', JSON.stringify(user));

    alert('User signed up successfully!');
});

// Function to display posts (example)
function displayPosts() {
    const postContainer = document.getElementById('post-container');

    // Simulate fetching posts from a server
    const posts = [
        { title: 'Breaking News', content: 'This is the content of the first post.', likes: 10, dislikes: 2 },
        { title: 'Another Update', content: 'This is the content of the second post.', likes: 5, dislikes: 0 }
    ];

    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.content}</p>
            <button onclick="likePost()">👍 ${post.likes}</button>
            <button onclick="dislikePost()">👎 ${post.dislikes}</button>
        `;
        postContainer.appendChild(postElement);
    });
}

// Example functions for likes and dislikes
function likePost() {
    alert('You liked this post!');
}

function dislikePost() {
    alert('You disliked this post!');
}

// Call the displayPosts function when the page loads
window.onload = displayPosts;
