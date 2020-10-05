import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  const postId = 5;
  return (
    <div>
      <div>About</div>
      <Link to={`/posts/${postId}`}>Go to post 1</Link>
    </div>
  );
};

export default About;
