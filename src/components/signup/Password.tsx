import React from 'react';
import { InputStyle } from './style';
import { checkPasswordValid } from '../../utils/checkValid';
import styled from 'styled-components';

interface InputBoxPasswordProps {
  passwordValid: boolean;
}

const InputBoxPassword = styled(InputStyle)<InputBoxPasswordProps>`
  border-color: ${(props) => {
    return props.passwordValid ? 'none' : 'red';
  }};
`;

interface Props {
  password: string;
  passwordValid: boolean;
  setPasswordValid: React.Dispatch<React.SetStateAction<boolean>>;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  setSecondPassword: React.Dispatch<React.SetStateAction<string>>;
}

const Password = ({
  password,
  passwordValid,
  setPasswordValid,
  setPassword,
  setSecondPassword,
}: Props) => {
  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    checkPasswordValid(e.target.value)
      ? setPasswordValid(true)
      : setPasswordValid(false);
  };

  const passwordFocusOn = (e: React.ChangeEvent<HTMLInputElement>) => {
    checkPasswordValid(password)
      ? setPasswordValid(true)
      : setPasswordValid(false);
  };
  return (
    <>
      <InputBoxPassword
        passwordValid={passwordValid}
        onFocus={passwordFocusOn}
        onChange={onChangePassword}
        onBlur={(e) => setPasswordValid(true)}
        placeholder={`비밀번호`}
        type="text"
      />
      <InputStyle
        onChange={(e) => {
          setSecondPassword(e.target.value);
        }}
        placeholder={`비밀번호 확인`}
        type="text"
      />
    </>
  );
};

export default Password;
