import React, { useState } from "react";
import {
  Card,
  CardImg,
  CardBody,
  Button,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";
import { handleAddAnswer } from "../../actions/questions";
import { ReactMessageNotification } from "../../utils/utilities";

const AnswerPanel = (props) => {
  const { question_id, author, authedUser, question, dispatch } = props;
  const [optionChanged, setOptionChanged] = useState("");
  const handleSubmitVote = (e) => {
    e.preventDefault();

    if (optionChanged === "") {
      ReactMessageNotification("danger", "", "Please Select Your Answer");
    } else {
      dispatch(
        handleAddAnswer({
          qid: question_id,
          authedUser,
          answer: optionChanged,
        })
      );
    }
  };
  const handleChangeOption = (answer) => {
    setOptionChanged(answer);
  };

  return (
    <div className="main-wrapper">
      <div className="main-title">
        <h3 className="sm mb-0">{author.name} asks:</h3>
      </div>
      <Card className="g-card">
        <div className="avatar">
          <CardImg top className="user-avatar" src={`${author.avatarURL}`} />
        </div>
        <CardBody>
          <p className="bold">Would you rather...</p>
          <Form onSubmit={handleSubmitVote}>
            <FormGroup className="mb-0">
              <Input
                name="questionOption"
                id="optionOne"
                type="radio"
                value="optionOneText"
                onChange={(e) => {
                  handleChangeOption("optionOne");
                }}
              />
              <Label for="optionOne"> {question.optionOne.text}</Label>
            </FormGroup>

            <FormGroup>
              <Input
                name="questionOption"
                id="optionTwo"
                type="radio"
                value="optionTwoText"
                onChange={(e) => {
                  handleChangeOption("optionTwo");
                }}
              />
              <Label for="optionTwo"> {question.optionTwo.text}</Label>
            </FormGroup>
            <Button color="warning" type="submit">
              Save Answer
            </Button>
          </Form>
        </CardBody>
      </Card>
    </div>
  );
};

export default AnswerPanel;
