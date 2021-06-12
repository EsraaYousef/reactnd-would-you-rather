import React from "react";
import { Link } from "react-router-dom";

class Error extends React.Component {
  render() {
    return (
      <div className="error-block text-center">
        <img src="/images/error.svg" alt="error" />
        <h3>Not found content</h3>
        <Link className="btn btn-primary" to="/">
          Back to Home
        </Link>
      </div>
    );
  }
}

export default Error;
