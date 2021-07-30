import React from 'react';
import { InputStyle } from './style';
import styled from 'styled-components';
import { checkEmailValid } from '../../utils/checkValid';

interface InputBoxEmailProps {
  emailValid: boolean;
}

const InputBoxEmail = styled(InputStyle)<InputBoxEmailProps>`
  border-color: ${(props) => {
    return props.emailValid ? `none` : `red`;
  }};
`;

interface Props {
  email: string;
  emailValid: boolean;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setEmailValid: React.Dispatch<React.SetStateAction<boolean>>;
}
const Email = ({ email, emailValid, setEmail, setEmailValid }: Props) => {
  const emailFocusOn = (e: React.FocusEvent<HTMLInputElement>) => {
    setEmailValid(true);
  };

  const emailFocusOut = (e: React.FocusEvent<HTMLInputElement>) => {
    if (checkEmailValid(email)) {
      setEmailValid(true);
    } else {
      setEmailValid(false);
    }
  };
  return (
    <InputBoxEmail
      emailValid={emailValid}
      onBlur={emailFocusOut}
      onFocus={emailFocusOn}
      value={email}
      placeholder={`아이디`}
      onChange={(e) => {
        setEmail(e.target.value);
      }}
      type="text"
    />
  );
};

export default Email;
