import React from "react";
import { connect } from "react-redux";
import { Card, CardImg, CardBody, CardTitle } from "reactstrap";
import PropType from "prop-types";

export class LeaderBoard extends React.Component {
  static propType = {
    leaderboardInfo: PropType.array.isRequired,
  };
  render() {
    const { leaderboardInfo } = this.props;
    return (
      <div className="main-wrapper">
        <div className="main-title">
          <h3>Leaderboard</h3>
        </div>
        <ul className="card-list">
          {leaderboardInfo.map((user, index) => (
            <li className="board" key={user.id}>
              <Card className="g-card">
                <div className="avatar">
                  <CardImg top className="user-avatar" src={user.avatarURL} />
                </div>
                <CardBody>
                  <CardTitle tag="h5">{user.name} Asks</CardTitle>
                  <p>
                    Total Answered Questions
                    <span className="ans-count">{user.answerCount}</span>
                  </p>
                  <p>
                    Total Created Questions
                    <span className="cr-count">{user.questionCount}</span>
                  </p>
                </CardBody>
                <div className="score">
                  <div className="header">
                    <h5>Score</h5>
                  </div>
                  <div className="score-counter">
                    <p className="mb-0">
                      {user.answerCount + user.questionCount}
                    </p>
                  </div>
                </div>
              </Card>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  const leaderboardInfo = Object.values(users)
    .map((user) => ({
      id: user.id,
      name: user.name,
      avatarURL: user.avatarURL,
      answerCount: Object.values(user.answers).length,
      questionCount: user.questions.length,
      total: Object.values(user.answers).length + user.questions.length,
    }))
    .sort((a, b) => a.total - b.total)
    .reverse()
    .slice(0, 3);
  return {
    leaderboardInfo,
  };
}

export default connect(mapStateToProps)(LeaderBoard);
