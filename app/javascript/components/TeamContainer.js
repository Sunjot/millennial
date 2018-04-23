import React from "react"
import PropTypes from "prop-types"
import Team from './Team'
import TeamSection from './TeamSection'

class TeamContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      id: 0
    }
  }

  changeCont = (id) => {
    this.setState({
      id: id
    });
  }

  render () {
    return (
      <React.Fragment>
        { this.state.id === 0 &&
          <React.Fragment>
            <p id="title">Tournament Teams</p>
            <p id="instructions">Click on a team to get more info!</p>
            <div id="team-boxes">
              {this.props.teamInfo.map(t => {
                return <Team teamInfo={t} changeCont={this.changeCont}/>
              })}
            </div>
          </React.Fragment>
        }
        { this.state.id !== 0 &&
          <React.Fragment>
            {this.props.teamInfo.map(t => {
              if (t["id"] === this.state.id) {
                return <TeamSection teamInfo={t} goBack={this.changeCont}/>
              }
            })}
          </React.Fragment>
        }
      </React.Fragment>
    );
  }
}

export default TeamContainer
