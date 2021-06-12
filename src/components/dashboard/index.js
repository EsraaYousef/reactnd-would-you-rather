import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Question from "../poll/question";
import { TabContent, TabPane, Nav, NavItem, NavLink } from "reactstrap";
import classnames from "classnames";

const DashBoard = (props) => {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  const { unansweredQuestions, answeredQuestions } = props;

  return (
    <div>
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "1" })}
            onClick={() => {
              toggle("1");
            }}
          >
            Unanswered Questions
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "2" })}
            onClick={() => {
              toggle("2");
            }}
          >
            Answered Questions
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <ul className="card-list">
            {unansweredQuestions.map((qid) => (
              <li key={qid}>
                <Question id={qid} />
              </li>
            ))}
          </ul>
        </TabPane>
        <TabPane tabId="2">
          <ul className="card-list">
            {answeredQuestions.map((qid) => (
              <li key={qid}>
                <Question id={qid} />
              </li>
            ))}
          </ul>
        </TabPane>
      </TabContent>
    </div>
  );
};

DashBoard.propTypes = {
  answeredPolls: PropTypes.array,
  unansweredPolls: PropTypes.array,
};

function mapStateToProps({ questions, users, authedUser }) {
  const user = users[authedUser];
  const answeredQuestions = Object.keys(user.answers).sort(
    (a, b) => questions[b].timestamp - questions[a].timestamp
  );
  return {
    unansweredQuestions: Object.keys(questions)
      .filter((qid) => !answeredQuestions.includes(qid))
      .sort((a, b) => questions[b].timestamp - questions[a].timestamp),
    answeredQuestions,
  };
}

export default connect(mapStateToProps)(DashBoard);
