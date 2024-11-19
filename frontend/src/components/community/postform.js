import React, { useState } from 'react';
import axios from 'axios';

const PostForm = () => {
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');
  const [message, setMessage] = useState('');

  const handlePostSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!author || !content) {
      setMessage('Please fill in all fields.');
      return;
    }

    const newPost = {
      author,
      content,
    };

    try {
      const response = await axios.post('/api/community', newPost); // Replace with the actual API endpoint
      setMessage('Post successfully created!');
      setAuthor('');
      setContent('');
    } catch (error) {
      console.error('Error creating post:', error);
      setMessage('Failed to create post.');
    }
  };

  return (
    <div>
      <h2>Create a Post</h2>
      <form onSubmit={handlePostSubmit}>
        <div>
          <label htmlFor="author">Your Name:</label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="content">Post Content:</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit Post</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default PostForm;
