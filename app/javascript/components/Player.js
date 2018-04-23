import React from "react"
import PropTypes from "prop-types"
import Gametag from './Gametag'

class Player extends React.Component {

  constructor(props){
    super(props);
  }

  render () {
    let link = "http:" + this.props.info["avatar"];

    return (
      <div id="player-sec">
        <img src={link} alt="User avatar"></img>
        <p id="username-id">{this.props.info["username"]} - {this.props.info["id"]}</p>
        <p id="gametags-title">Gametags</p>
        <div id="gametags-cont">
          {this.props.info["gametags"].map(g => {
            return <Gametag taginfo={g} />
          })}
        </div>
      </div>
    );
  }
}

export default Player
