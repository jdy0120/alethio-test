import React from 'react';
import { InputStyle } from './style';
import styled from 'styled-components';

const InputBoxMobile = styled(InputStyle)``;

interface Props {
  setMobile: React.Dispatch<React.SetStateAction<string>>;
}

const Mobile = ({ setMobile }: Props) => {
  return (
    <InputBoxMobile
      onChange={(e) => {
        setMobile(e.target.value);
      }}
      placeholder={`전화번호`}
      type="text"
    />
  );
};

export default Mobile;
