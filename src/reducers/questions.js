import {
  QUESTIONS_RECEIVED_SUCCESSFULLY,
  QUESTION_ANSWER_SUCCESSFULLY,
  QUESTION_ANSWER_FAILED,
  QUESTION_ADDED_SUCCESSFULLY,
  QUESTION_ADDED_FAILED,
} from "../actions/questions";

export default function questions(state = {}, action) {
  switch (action.type) {
    case QUESTIONS_RECEIVED_SUCCESSFULLY:
      return {
        ...state,
        ...action.questions,
      };
    case QUESTION_ANSWER_SUCCESSFULLY:
      const { authedUser, qid, answer } = action;
      return {
        ...state,
        [qid]: {
          ...state[qid],
          [answer]: {
            ...state[qid][answer],
            votes: state[qid][answer].votes.concat([authedUser]),
          },
        },
      };
    case QUESTION_ANSWER_FAILED:
      return {
        ...state,
        error: action.payload,
      };
    case QUESTION_ADDED_SUCCESSFULLY:
      const { id } = action;
      return {
        ...state,
        [id]: action,
      };
    case QUESTION_ADDED_FAILED:
      const { payload } = action;
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
  }
}
