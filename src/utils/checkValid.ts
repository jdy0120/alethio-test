export const checkEmailValid = (email: string) => {
  const regEmail = /([a-z|A-Z|0-9]@[a-z|A-Z|0-9].[a-z|A-Z|0-9])/;
  const validEmail = email.search(regEmail);
  return validEmail;
};

export const checkPasswordValid = (password: string) => {
  if (password.length < 8) {
    return false;
  } else if (password.length > 15) {
    return false;
  }
  return true;
};
