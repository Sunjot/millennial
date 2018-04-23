import React from "react"
import PropTypes from "prop-types"
import Slab from './Slab'
import SmallSlab from './SmallSlab'
import Player from './Player'

class TeamSection extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    let twitter = this.props.teamInfo["twitter"];
    let facebook = this.props.teamInfo["facebook"];
    let youtube = this.props.teamInfo["youtube"];
    let twitch = this.props.teamInfo["twitch"];

    if (twitter === null) twitter = 'N/A';
    if (facebook === null) facebook = 'N/A';
    if (youtube === null) youtube = 'N/A';
    if (twitch === null) twitch = 'N/A';

    return (
      <div id="team-sec">
        <p id="back-button" onClick={() => this.props.goBack(0)}>Pick another</p>
        <p className="team-name">{this.props.teamInfo["name"]} - {this.props.teamInfo["id"]}</p>
        <p className="slogan">{this.props.teamInfo["slogan"]}</p>

        <div id="other">
          <p className="name" id={this.props.teamInfo["active"]? 'green-slab' : 'red-slab'}>Active</p>
          <p className="name" id={this.props.teamInfo["sendable"]? 'green-slab' : 'red-slab'}>Sendable</p>
          <p className="name" id={this.props.teamInfo["is_subscribed"]? 'green-slab' : 'red-slab'}>Subscribed</p>
          <p className="name" id={this.props.teamInfo["is_my_team"]? 'green-slab' : 'red-slab'}>My Team</p>
        </div>

        <div id="tourney-tsize">
          <SmallSlab name="Tournament" num={this.props.teamInfo["tournament"]} />
          <SmallSlab name="Team size" num={this.props.teamInfo["teamsize"]} />
        </div>

        <div id="record">
          <Slab name="Games Played" num={this.props.teamInfo["games_played"]} customID="" />
          <Slab name="Wins" num={this.props.teamInfo["wins"]} customID="win-sec" />
          <Slab name="Losses" num={this.props.teamInfo["losses"]} customID="loss-sec" />
          <Slab name="Streak" num={this.props.teamInfo["streak"]} customID="" />
        </div>

        <div id="seed-finish">
          <SmallSlab name="Seeding" num={this.props.teamInfo["seed"]} />
          <SmallSlab name="Finish" num={this.props.teamInfo["finish"]} />
        </div>

        <div className="hrline"/>
        <p id="group-title">Group Info</p>
        <div id="group-stats">
          <Slab name="Number" num={this.props.teamInfo["group_number"]} customID="" />
          <Slab name="Wins" num={this.props.teamInfo["group_wins"]} customID="win-sec" />
          <Slab name="Losses" num={this.props.teamInfo["group_losses"]} customID="loss-sec" />
          <Slab name="Ranking" num={this.props.teamInfo["group_ranking"]} customID="" />
        </div>

        {this.props.teamInfo["players"].length > 0 &&
        <React.Fragment>
          <div className="hrline"/>
          <p id="player-title">Players</p>
          <div id="players">
            { this.props.teamInfo["players"].map(p => {
              return <Player info={p} />
            })}
          </div>
        </React.Fragment>
        }

        <div className="hrline"/>
        <p id="social-title">Social Links</p>
        <div id="socials">
          <SmallSlab name="Twitter" num={twitter} customID="twitter" />
          <SmallSlab name="Facebook" num={facebook} customID="facebook" />
          <SmallSlab name="Youtube" num={youtube} customID="youtube" />
          <SmallSlab name="Twitch" num={twitch} customID="twitch" />
        </div>
      </div>
    );
  }
}

export default TeamSection
