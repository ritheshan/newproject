import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CommunityFeed = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch community posts from the backend
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('/api/community'); // Replace with the actual API endpoint
        setPosts(response.data); // Expecting an array of community posts
        setLoading(false);
      } catch (error) {
        console.error('Error fetching community posts:', error);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <h2>Community Feed</h2>
      {loading ? (
        <p>Loading posts...</p>
      ) : (
        <div>
          {posts.map((post) => (
            <div key={post._id} className="community-post">
              <h3>{post.author}</h3>
              <p>{post.content}</p>
              <small>{new Date(post.date).toLocaleString()}</small>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CommunityFeed;
