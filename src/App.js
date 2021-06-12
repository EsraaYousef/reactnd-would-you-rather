import React, { Fragment, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import { handleInitialData } from "../src/actions/index";
import ReactMessageNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";

// import LoadingBar from "react-redux-loading-bar";
import Header from "./components/header";
import Login from "./components/login/login";
import DashBoard from "./components/dashboard";
import AddQuestion from "./components/poll/newQuestion";
//test question poll
// import QuestionPoll from "./components/poll/questionPoll";
// import QuestionResult from "./components/poll/questionResult";
import QuestionDetails from "./components/poll/questionDetails";
import LeaderBoard from "./components/leaderboard";
import Notfound from "./components/error";
import Logout from "./components/login/logout";
import ProtectedRoute from "./components/header/protectedRoutes";

import "./App.css";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(handleInitialData());
  }, [dispatch]);

  return (
    <Router>
      <Fragment>
        <ReactMessageNotification />
        <Header />
        <div className="custom-container mt-100 white-bg w-shadow w-radius">
          <Switch>
            <Route path="/login" exact component={Login} />
            <ProtectedRoute path="/dashboard" exact component={DashBoard} />
            <ProtectedRoute
              path="/"
              exact
              render={() => <Redirect to="/questions" />}
              component={DashBoard}
            />
            <ProtectedRoute path="/add" exact component={AddQuestion} />
            <ProtectedRoute path="/leaderboard" exact component={LeaderBoard} />
            {/* <ProtectedRoute
              path="/questionPoll"
              exact
              component={QuestionPoll}
            /> */}
            {/* <ProtectedRoute
              path="/questions/:id"
              exact
              component={QuestionResult}
            /> */}
            <ProtectedRoute
              path="/questions/:id"
              exact
              component={QuestionDetails}
            />
            <ProtectedRoute path="/logout" exact component={Logout} />
            <ProtectedRoute path="*" exact component={Notfound} />
          </Switch>
        </div>
      </Fragment>
    </Router>
  );
};

export default connect()(App);
