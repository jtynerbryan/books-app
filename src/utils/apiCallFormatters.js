export const logInBody = (email, password) => {
  return {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    email: email,
    password: password
  };
};
