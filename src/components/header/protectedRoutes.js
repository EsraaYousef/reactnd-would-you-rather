import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

function ProtectedRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={function (props) {
        return rest.isLogin ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location },
            }}
          />
        );
      }}
    />
  );
}

function mapStateToProps({ authedUser }) {
  return {
    isLogin: authedUser,
  };
}

export default connect(mapStateToProps)(ProtectedRoute);
