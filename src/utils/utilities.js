import { store } from "react-notifications-component";

export const ReactMessageNotification = (
  type,
  title,
  message,
  duration = 2000,
  onScreen = false
) => {
  store.addNotification({
    title: title,
    message: message,
    type: type,
    insert: "top",
    container: "top-right",
    animationIn: ["animated", "fadeIn"],
    animationOut: ["animated", "fadeOut"],
    dismiss: {
      duration: duration,
      onScreen: onScreen,
    },
  });
};
