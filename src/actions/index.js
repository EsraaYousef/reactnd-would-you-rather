import { questionsReceiveSuccessfully } from "./questions";
import { usersReceivedSuccessfully } from "./users";
import { getInitialData } from "../utils/api";

export const handleInitialData = () => {
  return (dispatch) => {
    getInitialData().then(({ questions, users }) => {
      dispatch(questionsReceiveSuccessfully(questions));
      dispatch(usersReceivedSuccessfully(users));
    });
  };
};
