export const checkEmailValid = (email: string) => {
  const regEmail = /([a-z|A-Z|0-9]@[a-z|A-Z|0-9].[a-z|A-Z|0-9])/;
  const validEmail = email.search(regEmail);
  return validEmail;
};

export const checkPasswordValid = (password: string) => {
  return password.length < 8 ? false : true;
};
