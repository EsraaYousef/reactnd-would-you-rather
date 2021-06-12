import { saveQuestion, saveQuestionAnswer } from "../utils/api";
import { ReactMessageNotification } from "../utils/utilities";

export const QUESTIONS_RECEIVED_SUCCESSFULLY =
  "QUESTIONS_RECEIVED_SUCCESSFULLY";
export const QUESTION_ADDED_SUCCESSFULLY = "QUESTION_ADDED_SUCCESSFULLY";
export const QUESTION_ADDED_FAILED = "QUESTION_ADDED_FAILED";
export const QUESTION_ANSWER_SUCCESSFULLY = "QUESTION_ANSWER_SUCCESSFULLY";
export const QUESTION_ANSWER_FAILED = "QUESTION_ANSWER_FAILED";

function answerAddedSuccessfully({ authedUser, qid, answer }) {
  return {
    type: QUESTION_ANSWER_SUCCESSFULLY,
    authedUser,
    qid,
    answer,
  };
}

function answerAddedFailed(error) {
  return { type: QUESTION_ADDED_FAILED, payload: error };
}

function questionAddedSuccessfully({
  id,
  timestamp,
  author,
  optionOne,
  optionTwo,
}) {
  return {
    type: QUESTION_ADDED_SUCCESSFULLY,
    id,
    timestamp,
    author,
    optionOne,
    optionTwo,
  };
}

function questionAddedFailed(error) {
  return { type: QUESTION_ANSWER_FAILED, payload: error };
}

export const questionsReceiveSuccessfully = (questions) => {
  return {
    type: QUESTIONS_RECEIVED_SUCCESSFULLY,
    questions,
  };
};

export const handleAddQuestion = (optionOneText, optionTwoText, author) => {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    const info = {
      optionOneText,
      optionTwoText,
      author: authedUser,
    };
    return saveQuestion(info)
      .then((question) => {
        dispatch(questionAddedSuccessfully(question));
        ReactMessageNotification("success", "", "Success to Add New Question");
      })
      .catch((error) => {
        dispatch(questionAddedFailed(error));
        ReactMessageNotification(
          "danger",
          "",
          "unfortunately: Something went wrong"
        );
      });
  };
};

export const handleAddAnswer = (info) => {
  return (dispatch) => {
    dispatch(answerAddedSuccessfully(info));
    return saveQuestionAnswer(info)
      .then(() => {
        ReactMessageNotification(
          "success",
          "",
          "congratulations: You Are Right"
        );
      })
      .catch((error) => {
        dispatch(answerAddedFailed(error));
        ReactMessageNotification(
          "danger",
          "",
          "unfortunately: Something went wrong"
        );
      });
  };
};
