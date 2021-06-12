import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { unsetAuthedUser } from "../../actions/authedUser";
import { ReactMessageNotification } from "../../utils/utilities";

class Logout extends Component {
  componentWillMount() {
    this.props.dispatch(unsetAuthedUser());
    ReactMessageNotification("danger", "", "Hope you come again");
  }
  render() {
    return <Redirect to="/" />;
  }
}

export default connect()(Logout);
