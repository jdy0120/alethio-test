import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { fetchSignUp } from '../utils/fetchAPI';
import { useAppContext } from '../_providers/AppProviders';
import { checkEmailValid, checkPasswordValid } from '../utils/checkValid';
import Email from './signup/Email';
import Password from './signup/Password';
import Mobile from './signup/Mobile';

const SignUpContainer = styled.div`
  display: flex;
  justify-content: center;
`;

/**
 * 회원가입
 */
const SignUp = () => {
  const [email, setEmail] = React.useState('');
  const [emailValid, setEmailValid] = React.useState(true);
  const [password, setPassword] = React.useState('');
  const [passwordValid, setPasswordValid] = React.useState(true);
  const [secondPassword, setSecondPassword] = React.useState('');
  const [mobile, setMobile] = React.useState('');
  const { setToken } = useAppContext();

  const emailRef = React.useRef<HTMLInputElement>(null);

  const history = useHistory();

  const submit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!checkEmailValid(email)) {
      emailRef.current?.focus();
      alert('이메일 확인');
      return;
    }
    if (!checkPasswordValid(password)) {
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

  React.useEffect(() => {}, [emailValid, password, passwordValid]);

  return (
    <SignUpContainer>
      <div>
        <Email
          emailRef={emailRef}
          email={email}
          emailValid={emailValid}
          setEmail={setEmail}
          setEmailValid={setEmailValid}
        />
        <Password
          password={password}
          setPasswordValid={setPasswordValid}
          setPassword={setPassword}
          passwordValid={passwordValid}
          setSecondPassword={setSecondPassword}
        />
        <Mobile setMobile={setMobile} />
        <button onClick={submit}>{'가입'}</button>
      </div>
    </SignUpContainer>
  );
};

export default SignUp;
