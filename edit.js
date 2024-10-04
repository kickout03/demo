document.addEventListener('DOMContentLoaded', function () {
    const textarea = document.getElementById('blog-content');
    const saveBtn = document.querySelector('.save-btn');

    // Load the blog content from localStorage
    const blogContent = localStorage.getItem('blogContent');
    if (blogContent) {
        textarea.value = blogContent;
    }

    // Function to save the edited blog content
    saveBtn.addEventListener('click', function () {
        const updatedContent = textarea.value.trim();
        if (updatedContent) {
            // Save the updated content back to localStorage (or send it to a server)
            localStorage.setItem('blogContent', updatedContent);
            alert('Blog post updated successfully!');
            window.location.href = 'test.html'; // Redirect back to the main page
        } else {
            alert('Blog content cannot be empty.');
        }
    });
});
