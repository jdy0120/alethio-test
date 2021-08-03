import React from 'react';
import logo from '../../assets/logo.png';
import hamburger from '../../assets/hamburger.png';
import styled from 'styled-components';
import close from '../../assets/close.png';

const LogoContainer = styled.div`
  @media ${(props) => props.theme.mobile} {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
`;

const LogoStyle = styled.img`
  width: auto;
  height: 100px;
`;

const HamburgerStyle = styled.img`
  width: auto;
  height: 100px;
  display: none;

  @media ${(props) => props.theme.mobile} {
    display: inline-block;
  }
`;

interface Props {
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const Logo = ({ modal, setModal }: Props) => {
  return (
    <LogoContainer>
      <LogoStyle src={logo} />
      <HamburgerStyle
        onClick={(e) => {
          setModal(!modal);
        }}
        src={modal ? close : hamburger}
      />
    </LogoContainer>
  );
};

export default Logo;
