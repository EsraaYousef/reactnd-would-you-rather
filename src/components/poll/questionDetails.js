import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import AnswerQuestion from "./answerQuestion";
import QuestionResult from "./questionResult";

class QuestionDetails extends React.Component {
  isAnswered = (authUser, question) => {
    return (
      question.optionOne.votes.includes(authUser) ||
      question.optionTwo.votes.includes(authUser)
    );
  };

  render() {
    const { authedUser, dispatch, users, question, id, author } = this.props;
    const answer = this.isAnswered(authedUser, question);

    if (question === null) {
      return <Redirect to="/error" />;
    } else if (answer === true) {
      return (
        <QuestionResult
          qid={id}
          question={question}
          authedUser={authedUser}
          author={author}
          users={users}
        />
      );
    } else {
      return (
        <AnswerQuestion
          dispatch={dispatch}
          question_id={id}
          author={author}
          authedUser={authedUser}
          question={question}
        />
      );
    }
  }
}

function mapStateToProps({ authedUser, users, questions }, props) {
  const { id } = props.match.params;
  const question = questions[id];
  const author = question ? users[question.author] : null;
  const answered = question
    ? question.optionOne.votes.indexOf(authedUser) > -1 ||
      question.optionTwo.votes.indexOf(authedUser) > -1
    : false;

  return {
    id,
    users,
    authedUser,
    question,
    author,
    answered,
  };
}

export default connect(mapStateToProps)(QuestionDetails);
