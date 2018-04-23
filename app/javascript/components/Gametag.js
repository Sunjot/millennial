import React from "react"
import PropTypes from "prop-types"

class Gametag extends React.Component {
  render () {
    let link = "http:" + this.props.taginfo["game_network"]["icon_image"];

    return (
      <div id="gametag">
        <p><span>Name</span>: {this.props.taginfo["name"]}</p>
        <p><span>ID</span>: {this.props.taginfo["id"]}</p>
        <p><span>User ID</span>: {this.props.taginfo["user_id"]}</p>
        <p><span>Update</span>: {this.props.taginfo["updated_at"]}</p>
        <div id="network-hl" />
        <div id="network-cont">
          <img src={link} />
          <div>
            <p><span>ID</span>: {this.props.taginfo["game_network"]["id"]}</p>
            <p><span>Name</span>: {this.props.taginfo["game_network"]["name"]}</p>
            <p><span>Platform</span>: {this.props.taginfo["game_network"]["platform"]}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Gametag
