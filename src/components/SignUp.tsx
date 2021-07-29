import React from 'react';
import { checkEmailValid, checkPasswordValid } from '../utils/checkValid';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { fetchSignUp } from '../utils/fetchAPI';
import { useAppContext } from '../_providers/AppProviders';

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
  const { setToken } = useAppContext();

  const history = useHistory();

  const emailFocusOut = (e: React.FocusEvent<HTMLInputElement>) => {
    if (checkEmailValid(email) !== -1) {
      setEmailValid(true);
    } else {
      setEmailValid(false);
    }
  };

  const passwordFocusOn = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const submit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!emailValid) {
      alert('이메일 확인');
      return;
    }
    if (!passwordValid) {
      alert('비밀번호 확인');
      return;
    }
    if (password !== secondPassword) {
      alert('비밀번호 불일치');
      return;
    }

    const response = await fetchSignUp({ email, password, mobile });
    const token = response.token;
    setToken(token);
    history.push('/');
  };

  React.useEffect(() => {
    console.log(emailValid, passwordValid);
    console.log(password);
    checkPasswordValid(password)
      ? setPasswordValid(true)
      : setPasswordValid(false);
  }, [emailValid, password, passwordValid]);

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
        <button onClick={submit}>{'가입'}</button>
      </div>
    </SignUpContainer>
  );
};

export default SignUp;
