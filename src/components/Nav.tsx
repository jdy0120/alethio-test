import React from 'react';
import { Route, Link, Switch, Router } from 'react-router-dom';
import logo from '../assets/logo.png';
import styled from 'styled-components';
import { useAppContext } from '../_providers/AppProviders';

const HeadContainer = styled.header`
  border: 1px solid red;
  height: 100px;
  display: flex;
  justify-content: space-between;
  background-color: #faebdd;

  @media ${(props) => props.theme.mobile} {
    position: absolute;
    background-color: green;
    width: 100%;
    height: 100%;
  }
`;

const Logo = styled.img`
  width: auto;
  height: 100px;
`;

const Menu = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;

  @media ${(props) => props.theme.mobile} {
  }
`;

const MenuItem = styled.li`
  @media ${(props) => props.theme.mobile} {
  }
`;

const Nav = () => {
  const {
    state: { token },
  } = useAppContext();

  React.useEffect(() => {}, [token]);

  return (
    <HeadContainer>
      <Logo src={logo} />
      <Menu>
        <MenuItem>
          <Link to="/">{'서비스'}</Link>
        </MenuItem>
        <MenuItem>
          {token ? (
            <Link to="/mypage/order">{'마이페이지'}</Link>
          ) : (
            <Link to="/sign-up">{'회원가입'}</Link>
          )}
        </MenuItem>
        <MenuItem>
          {token ? (
            <Link to="/logout">{'로그아웃'}</Link>
          ) : (
            <Link to="/login">{'로그인'}</Link>
          )}
        </MenuItem>
      </Menu>
    </HeadContainer>
  );
};

export default Nav;
