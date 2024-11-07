document.getElementById("add-post-btn").addEventListener("click", function() {
    const content = document.getElementById("post-content").value.trim();
    if (content === "") {
        alert("Please write something before adding a post.");
        return;
    }
    
    // Get current date and time
    const date = new Date();
    const dateString = date.toLocaleDateString() + " " + date.toLocaleTimeString();

    // Create a new post element
    const postElement = document.createElement("li");
    postElement.classList.add("post");

    // Add date and content to the post
    postElement.innerHTML = `
        <div class="post-date">${dateString}</div>
        <div class="post-content">${content}</div>
    `;

    // Add post to the list
    document.getElementById("posts-list").appendChild(postElement);

    // Clear the text area
    document.getElementById("post-content").value = "";
});