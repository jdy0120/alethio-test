import React from 'react';
import styled from 'styled-components';
import { useAppContext } from '../../_providers/AppProviders';
import LinkComponent from './LinkComponent';

interface MenuContainerProps {
  modal: boolean;
}

const MenuContainer = styled.div<MenuContainerProps>`
  display: flex;
  align-items: center;

  @media ${(props) => props.theme.mobile} {
    display: ${(props) => {
      return props.modal ? `block` : `none`;
    }};
  }
`;

interface Props {
  modal: boolean;
}

const Menu = ({ modal }: Props) => {
  const {
    state: { token },
  } = useAppContext();

  return (
    <MenuContainer modal={modal}>
      <LinkComponent to="/">{'서비스'}</LinkComponent>
      {token ? (
        <LinkComponent to="/mypage/order">{'마이페이지'}</LinkComponent>
      ) : (
        <LinkComponent to="/sign-up">{'회원가입'}</LinkComponent>
      )}
      {token ? (
        <LinkComponent to="/logout">{'로그아웃'}</LinkComponent>
      ) : (
        <LinkComponent to="/login">{'로그인'}</LinkComponent>
      )}
    </MenuContainer>
  );
};

export default Menu;
