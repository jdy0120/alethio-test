import React, { createContext } from 'react';
import { checkEmailValid, checkPasswordValid } from '../utils/checkValid';
import styled from 'styled-components';

const SignUpContainer = styled.div`
  border: 1px solid blue;
  display: flex;
  justify-content: center;
`;

const InputBox = styled.input`
  display: block;
`;

const SignUp = () => {
  const [email, setEmail] = React.useState('');
  const [emailValid, setEmailValid] = React.useState(false);
  const [password, setPassword] = React.useState('');
  const [passwordValid, setPasswordValid] = React.useState(false);
  const [secondPassword, setSecondPassword] = React.useState('');
  const [mobile, setMobile] = React.useState('');

  const emailFocusOut = (e: React.FocusEvent<HTMLInputElement>) => {
    if (checkEmailValid(email) !== -1) {
      setEmailValid(true);
    } else {
      setEmailValid(false);
    }
  };

  const passwordFocusOn = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);

    checkPasswordValid(password)
      ? setPasswordValid(true)
      : setPasswordValid(false);
  };

  React.useEffect(() => {
    console.log(emailValid, passwordValid);
  }, [emailValid, password]);

  return (
    <SignUpContainer>
      <div>
        <InputBox
          onBlur={emailFocusOut}
          value={email}
          placeholder={`아이디`}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          type="text"
        />
        <InputBox
          onChange={passwordFocusOn}
          placeholder={`비밀번호`}
          type="text"
        />
        <InputBox
          onChange={(e) => {
            setSecondPassword(e.target.value);
          }}
          placeholder={`비밀번호 확인`}
          type="text"
        />
        <InputBox
          onChange={(e) => {
            setMobile(e.target.value);
          }}
          placeholder={`전화번호`}
          type="text"
        />
        <button>{'가입'}</button>
      </div>
    </SignUpContainer>
  );
};

export default SignUp;
