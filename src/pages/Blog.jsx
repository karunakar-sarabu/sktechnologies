import React from 'react';
import './Blog.css';

const Blog = () => {
  return (
    <div className="blog-container">
      <h2>SK Technologies Blog</h2>

      <div className="blog-post">
        <h3>Top 5 Benefits of Learning the MERN Stack</h3>
        <p>The MERN Stack (MongoDB, Express, React, Node.js) offers full-stack capabilities for modern web apps. Learn how it's powering the future...</p>
      </div>

      <div className="blog-post">
        <h3>Getting Started with Expo & React Native</h3>
        <p>Expo makes mobile app development simple and fast. Here's how beginners can build Android/iOS apps quickly...</p>
      </div>

      <div className="blog-post">
        <h3>AI for Everyone: What You Need to Know</h3>
        <p>AI isn’t just for experts. See how it’s being used in everyday life — and how you can start building AI-powered solutions...</p>
      </div>
    </div>
  );
};

export default Blog;
