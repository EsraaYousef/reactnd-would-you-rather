import React, { useState } from "react";
import { connect } from "react-redux";
import { Redirect, withRouter } from "react-router-dom";
import { Button, Form, FormGroup, Input } from "reactstrap";

import { ReactMessageNotification } from "../../utils/utilities";
import { setAuthedUser } from "../../actions/authedUser";

const Login = (props) => {
  const { dispatch, users } = props;
  const [userId, setUserId] = useState(null);
  const [redirectHome, setRedirectHome] = useState(false);
  const { from } = props.location.state || { from: { pathname: "/" } };

  const handleLogin = () => {
    dispatch(setAuthedUser(userId));
    setRedirectHome(true);
    ReactMessageNotification("success", "", "Great Signed in Success", 1500);
  };

  const handleInputChange = (event) => {
    setUserId(event.target.value);
  };

  if (redirectHome) {
    return <Redirect to={from} />;
  }

  return (
    <div className="text-center">
      <div className="container-heading">
        <h3 className="title app-title">Would You Rather App</h3>
        <p>Please sign in to continue</p>
      </div>
      <div className="form-login">
        <Form>
          <FormGroup className="form-group">
            <Input type="select" users={users} onChange={handleInputChange}>
              <option value="-1" defaultChecked>
                Please select user
              </option>
              {Object.keys(users).map((user) => (
                <option key={user} value={user}>
                  {users[user].name}
                </option>
              ))}
            </Input>
          </FormGroup>
          <Button
            className="btn btn-primary btn-lg"
            id="login_button"
            disabled={userId === null}
            onClick={handleLogin}
          >
            Login
          </Button>
        </Form>
      </div>
    </div>
  );
};

function mapStateToProps({ users }) {
  return {
    users,
  };
}

export default withRouter(connect(mapStateToProps)(Login));
