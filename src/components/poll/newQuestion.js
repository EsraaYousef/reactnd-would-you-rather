import React, { useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Button, Form, FormGroup, Input } from "reactstrap";
import { Card, CardBody } from "reactstrap";
import { handleAddQuestion } from "../../actions/questions";

const NewQuestion = (props) => {
  const { dispatch } = props;
  const [optionOneText, setOptionOneText] = useState("");
  const [optionTwoText, setOptionTwoText] = useState("");
  const [redirectDashboard, setRedirectDashboard] = useState(false);

  const handleInputChange = (event, field) => {
    const value = event.target.value;
    field === "option1" ? setOptionOneText(value) : setOptionTwoText(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(handleAddQuestion(optionOneText, optionTwoText));
    setOptionOneText("");
    setOptionTwoText("");
    setRedirectDashboard(true);
  };
  if (redirectDashboard) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <div className="main-wrapper">
      <div className="main-title">
        <h3>Create New Poll Question</h3>
      </div>
      <div className="card-list new-poll">
        <Card className="g-card">
          <CardBody>
            <p className="bold">Would you rather...</p>
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Input
                  name="optionOneText"
                  type="text"
                  placeholder="Enter Option One Text Here"
                  value={optionOneText}
                  onChange={(e) => handleInputChange(e, "option1")}
                ></Input>
              </FormGroup>

              <div className="or">Or</div>

              <FormGroup>
                <Input
                  name="optionTwoText"
                  type="text"
                  placeholder="Enter Option Two Text Here"
                  value={optionTwoText}
                  onChange={(e) => handleInputChange(e, "option2")}
                ></Input>
              </FormGroup>
              <Button
                className="btn btn-primary btn-lg btn btn-secondary "
                type="submit"
                disabled={optionOneText === "" || optionTwoText === ""}
              >
                Create Poll
              </Button>
            </Form>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default connect()(NewQuestion);
