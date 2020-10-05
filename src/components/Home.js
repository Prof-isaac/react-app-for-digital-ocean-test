import React from "react";
import { Link } from "react-router-dom";
// how to change route
//we added distructuring to to history instaed of props.history we used history
const Home = ({ history, location, match }) => {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/about">go to about page </Link>
      <button
        onClick={() => {
          history.push("./about");
        }}
      >
        click me to go to about page
      </button>
    </div>
  );
};

export default Home;
