import { USERS_RECEIVEd_SUCCESSFULLY } from "../actions/users";
import {
  QUESTION_ANSWER_SUCCESSFULLY,
  QUESTION_ADDED_SUCCESSFULLY,
} from "../actions/questions";

export default function users(state = {}, action) {
  switch (action.type) {
    case USERS_RECEIVEd_SUCCESSFULLY:
      return {
        ...state,
        ...action.users,
      };
    case QUESTION_ANSWER_SUCCESSFULLY:
      const { qid, authedUser, answer } = action;
      return {
        ...state,
        [authedUser]: {
          ...state[authedUser],
          answers: {
            ...state[authedUser].answers,
            [qid]: answer,
          },
        },
      };
    case QUESTION_ADDED_SUCCESSFULLY:
      const { id, author } = action;
      return {
        ...state,
        [author]: {
          ...state[author],
          questions: state[author].questions.concat([id]),
        },
      };
    default:
      return state;
  }
}
