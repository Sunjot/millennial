import React from "react"
import PropTypes from "prop-types"

class Team extends React.Component {

  constructor(props) {
    super(props);
  }
  render () {
    let link = "http:" + this.props.teamInfo["logo"];

    return (
      <React.Fragment>
        <div className="team-box">
          <img src={link} onClick={() => this.props.changeCont(this.props.teamInfo["id"])}/>
          <p className="team-name">{this.props.teamInfo["name"]}</p>
        </div>
      </React.Fragment>
    );
  }
}

export default Team
