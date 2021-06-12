export const USERS_RECEIVEd_SUCCESSFULLY = "USERS_RECEIVEd_SUCCESSFULLY";

export function usersReceivedSuccessfully(users) {
  return {
    type: USERS_RECEIVEd_SUCCESSFULLY,
    users,
  };
}
