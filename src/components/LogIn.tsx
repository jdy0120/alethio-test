import React from 'react';
import styled from 'styled-components';
import { fetchLogIn } from '../utils/fetchAPI';
import { useAppContext } from '../_providers/AppProviders';
import { useHistory } from 'react-router-dom';

const LoginContainter = styled.div`
  display: flex;
  justify-content: center;
`;

const InputBox = styled.input`
  display: block;
`;

const LogIn = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const { setToken } = useAppContext();

  const history = useHistory();

  console.log('LogIn');

  const getToken = async (e: React.MouseEvent<HTMLButtonElement>) => {
    try {
      const response = await fetchLogIn({ email, password });
      const token = response.token;
      setToken(token);
      history.push('/');
    } catch (err) {
      alert('비밀번호를 확인해주세요.');
    }
  };

  return (
    <LoginContainter>
      <div>
        <InputBox
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder={`아이디`}
          type="text"
        />
        <InputBox
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder={`비밀번호`}
          type="text"
        />
        <button onClick={getToken}>{`로그인`}</button>
      </div>
    </LoginContainter>
  );
};

export default LogIn;
