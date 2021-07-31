import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import styled from 'styled-components';
import { useAppContext } from '../../_providers/AppProviders';
import Logo from './Logo';
import Menu from './Menu';

interface HeadContainerProps {
  modal: boolean;
}

const HeadContainer = styled.header<HeadContainerProps>`
  height: 100px;
  display: flex;
  justify-content: space-between;
  background-color: #faebdd;

  @media ${(props) => props.theme.mobile} {
    width: 100%;
    display: inline-block;

    ${(props) => {
      if (props.modal) {
        return `
          position: fixed;
          height: 100%;
        `;
      }
    }}
  }
`;

const Nav = () => {
  const [modal, setModal] = React.useState(false);

  const {
    state: { token },
  } = useAppContext();

  React.useEffect(() => {}, [modal, token]);

  return (
    <HeadContainer modal={modal}>
      <Logo modal={modal} setModal={setModal} />

      <Menu modal={modal} />
    </HeadContainer>
  );
};

export default Nav;
