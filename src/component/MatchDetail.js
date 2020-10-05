import React, { Component } from "react";

class MatchDetail extends Component {
  state = {
    matchDetail: []
  };
  componentDidMount() {
    fetch(
      `http://localhost:4000/admins/login/view/match?id=${this.props.match.params.id}`
    )
      .then(reponse => reponse.json())
      .then(response => {
        this.setState({ matchDetail: response });
        // console.log(response);
        console.log(this.state.matchDetail);
      });
  }

  render() {
    return (
      <div>
        <div>what a match</div>
        {this.state.matchDetail.map(matchDetail => (
          <p>{matchDetail.match}</p>
        ))}
      </div>
    );
  }
}

export default MatchDetail;
