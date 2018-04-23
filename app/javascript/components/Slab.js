import React from "react"
import PropTypes from "prop-types"

class Slab extends React.Component {
  render () {
    return (
      <div id={this.props.customID} className="slab-sec">
        <p className="slab-name">{this.props.name}</p>
        <p className="slab-num">{this.props.num}</p>
      </div>
    );
  }
}

export default Slab
