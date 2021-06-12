import {
  _getQuestions,
  _getUsers,
  _saveQuestion,
  _saveQuestionAnswer,
} from "./_DATA";

export const getQuestions = _getQuestions;

export const getUsers = _getUsers;

export const saveQuestion = _saveQuestion;

export const saveQuestionAnswer = _saveQuestionAnswer;

// export function formatDate(timestamp) {
//   const d = new Date(timestamp);
//   const time = d.toLocaleTimeString("en-US");
//   return time.substr(0, 5) + time.slice(-2) + " | " + d.toLocaleDateString();
// }

// function generateUID() {
//   return (
//     Math.random().toString(36).substring(2, 15) +
//     Math.random().toString(36).substring(2, 15)
//   );
// }

// export function formatQuestion({ optionOneText, optionTwoText, author }) {
//   console.log("formatQuestion");
//   console.log(optionOneText, optionTwoText, author);
//   return {
//     id: generateUID(),
//     timestamp: Date.now(),
//     author,
//     optionOne: {
//       votes: [],
//       text: optionOneText,
//     },
//     optionTwo: {
//       votes: [],
//       text: optionTwoText,
//     },
//   };
// }
