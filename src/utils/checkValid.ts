export const checkEmailValid = (email: string): boolean => {
  const regEmail =
    /[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]$/i;
  const validEmail = regEmail.test(email);
  return validEmail;
};

/**
 * 비밀번호 확인
 */
export const checkPasswordValid = (password: string): boolean => {
  if (password.length < 8) {
    return false;
  } else if (password.length > 15) {
    return false;
  }
  return true;
};
