import React, { Component } from "react";
import { Link } from "react-router-dom";

class Fixtures extends Component {
  state = {
    matches: []
  };

  componentDidMount() {
    fetch("http://localhost:4000/admins/login/view/matches")
      .then(reponse => reponse.json())
      .then(response => {
        this.setState({ matches: response });
        // console.log(response);
        //console.log(this.state.matches);
      });
  }
  render() {
    return (
      <div>
        <h1>Fixtures page</h1>
        {this.state.matches.map(match => (
          <h4 key={match._id}>
            <Link to={`/matchDetail/${match._id}`}>{match.match}</Link>
          </h4>
        ))}
      </div>
    );
  }
}

export default Fixtures;
