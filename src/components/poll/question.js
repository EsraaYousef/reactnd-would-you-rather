import React from "react";
import { connect } from "react-redux";
import { Card, CardImg, CardBody, CardTitle } from "reactstrap";
import { Link, Redirect } from "react-router-dom";

class Question extends React.Component {
  state = {
    actionViewPoll: false,
  };
  handleQuestionStatus = (e) => {
    e.preventDefault();
    this.setState({
      actionViewPoll: false,
    });
  };
  render() {
    const { user, author, question, unansweredQuestions } = this.props;
    const actionViewPoll = this.state;
    const pathURL = `/questions/${question.id}`;

    if (actionViewPoll === true) {
      const pageViewURL = "/questions/" + question.id;
      const pageResultURL = "/questions/" + question.id + "result";
      const URL = unansweredQuestions ? pageResultURL : pageViewURL;

      return <Redirect to={{ pathname: URL, state: { fromParent: true } }} />;
    }
    if (question === null) {
      return <Redirect to="/error" />;
    }
    if (this.state.viewQuestion) {
      return (
        <Redirect to={{ pathname: "/questions/" + this.props.question.id }} />
      );
    }

    return (
      <Card className="g-card">
        <div className="avatar">
          <CardImg top className="user-avatar" src={`${user.avatarURL}`} />
        </div>
        <CardBody>
          <CardTitle tag="h5">{author.name} asks</CardTitle>
          <h6>{question.optionOne.text}</h6>
          <p>Or...</p>
          <Link to={pathURL} className="btn btn-warning">
            Answer Question
          </Link>
        </CardBody>
      </Card>
    );
  }
}

function mapStateToProps({ authedUser, users, questions }, { id }) {
  const question = questions[id];
  const author = question ? users[question.author] : null;
  const user = users[question.author];
  return {
    authedUser,
    question,
    author,
    user,
  };
}

export default connect(mapStateToProps)(Question);
