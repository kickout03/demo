document.addEventListener('DOMContentLoaded', function () {
    const addBlogBtn = document.querySelector('.add-blog-btn');
    const mainContainer = document.querySelector('.main-container');

    // Function to create a new blog element
    function createBlogElement(content = 'This is a new blog post. Click edit to change the text.') {
        const blogContainer = document.createElement('div');
        blogContainer.classList.add('blog-container');

        const blogHeader = document.createElement('div');
        blogHeader.classList.add('blog-header');

        const editBtn = document.createElement('button');
        editBtn.classList.add('edit-btn');
        editBtn.textContent = 'Edit';
        editBtn.addEventListener('click', function () {
            redirectToEditPage(content);
        });

        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete-btn');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', function () {
            deleteBlog(blogContainer);
        });

        blogHeader.appendChild(editBtn);
        blogHeader.appendChild(deleteBtn);

        const blogContent = document.createElement('div');
        blogContent.classList.add('blog-content');
        const blogText = document.createElement('p');
        blogText.textContent = content;
        blogContent.appendChild(blogText);

        blogContainer.appendChild(blogHeader);
        blogContainer.appendChild(blogContent);

        return blogContainer;
    }

    // Function to handle the "Add Blog" button click
    addBlogBtn.addEventListener('click', function () {
        const newBlog = createBlogElement();
        mainContainer.appendChild(newBlog);
    });

    // Function to redirect to the edit page
    function redirectToEditPage(content) {
        // Pass the blog content to the edit page using URL parameters or localStorage
        localStorage.setItem('blogContent', content);
        window.location.href = 'edit.html';
    }

    // Function to delete a blog
    function deleteBlog(blogContainer) {
        if (confirm('Are you sure you want to delete this blog post?')) {
            blogContainer.remove();
        }
    }
});
