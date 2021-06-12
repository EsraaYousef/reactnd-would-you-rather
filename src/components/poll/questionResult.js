import React from "react";
import { Redirect, Link } from "react-router-dom";
import { Card, CardImg, CardBody, Progress } from "reactstrap";

const QuestionResult = (props) => {
  const { qid, authedUser, users, question, author } = props;
  const OPTION1 = "optionOne";
  const OPTION2 = "optionTwo";

  if (!question) {
    return <Redirect to="/error" />;
  }

  const yourVoteMessage = "Your Choice";
  const optionOneVotes =
    question && question.optionOne.votes ? question.optionOne.votes.length : 0;
  const optionTwoVotes =
    question && question.optionTwo.votes ? question.optionTwo.votes.length : 0;

  const totalVotes = optionOneVotes + optionTwoVotes;

  const percentageOptionOne = Math.round((optionOneVotes / totalVotes) * 100);

  const percentageOptionTwo = Math.round((optionTwoVotes / totalVotes) * 100);

  const answer = users[authedUser].answers[qid];

  console.log(
    authedUser,
    "\n",
    answer,
    "\n",
    "optionOneVotes " + optionOneVotes,
    "\n",
    "optionTwoVotes " + optionTwoVotes,
    "\n",
    "percentageOptionOne " + percentageOptionOne,
    "\n",
    "percentageOptionTwo " + percentageOptionTwo,
    "\n"
  );

  return (
    <div className="main-wrapper">
      <div className="main-title d-flex justify-content-between">
        <h3 className="sm">Asked by {author.name}</h3>
        <Link to="/dashboard" className="btn" color="link">
          back
        </Link>
      </div>
      <Card className="g-card">
        <div className="avatar">
          <CardImg
            top
            className="user-avatar"
            src={`${author.avatarURL}`}
            alt={`Avatar of ${author}`}
          />
        </div>
        <CardBody>
          <div className="result">
            <h6>Results:</h6>
            <div className="option option-1">
              <div className="option-body">
                <p className="bold">{question.optionOne.text}</p>
                <p>
                  {optionOneVotes} out of {totalVotes} votes
                  <span className="percentage">({percentageOptionOne}%)</span>
                </p>
              </div>
              <div className="d-flex">
                <Progress value={percentageOptionOne} />
                {answer === OPTION1 && (
                  <span className="your-vote"> {yourVoteMessage} </span>
                )}
              </div>
            </div>
            <div className="option option-2">
              <div className="option-body">
                <p className="bold">{question.optionTwo.text}</p>
                <p>
                  {optionTwoVotes} out of {totalVotes} votes
                  <span className="percentage">({percentageOptionTwo}%)</span>
                </p>
              </div>
              <div className="d-flex">
                <Progress value={percentageOptionTwo} />
                {answer === OPTION2 && (
                  <span className="your-vote">{yourVoteMessage}</span>
                )}
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default QuestionResult;
