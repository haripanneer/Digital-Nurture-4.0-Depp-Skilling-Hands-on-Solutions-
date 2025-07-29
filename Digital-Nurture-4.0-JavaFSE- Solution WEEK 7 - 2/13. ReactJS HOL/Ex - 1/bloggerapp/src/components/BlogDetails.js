import React from 'react';

function BlogDetails() {
  const blogs = [
    { id: 101, title: 'Getting Started with React', category: 'React' },
    { id: 102, title: 'CSS Grid Layout', category: 'CSS' },
    { id: 103, title: 'JavaScript ES6 Features', category: 'JavaScript' }
  ];

  return (
    <div>
      <h2>Blog Details</h2>
      <div className="blog-list">
        {blogs.map(blog => (
          <div key={blog.id} className="blog-item">
            <h3>{blog.title}</h3>
            <p>Category: {blog.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogDetails;