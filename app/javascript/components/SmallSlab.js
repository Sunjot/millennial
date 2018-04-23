import React from "react"
import PropTypes from "prop-types"

class SmallSlab extends React.Component {
  render () {
    return (
      <div className="small-slab">
        <p className="name" id={this.props.customID}>{this.props.name}</p>
        <p>{this.props.num}</p>
      </div>
    );
  }
}

export default SmallSlab
