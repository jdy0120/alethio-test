import React from 'react';
import { Route, Link, Switch, Router } from 'react-router-dom';
import logo from '../assets/logo.png';
import styled from 'styled-components';

const HeadContainer = styled.header`
  border: 1px solid red;
  height: 100px;
  display: flex;
  justify-content: space-between;
`;

const Logo = styled.img`
  width: auto;
  height: 100px;
`;

const Menu = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
`;

const MenuItem = styled.li``;
const Nav = () => {
  return (
    <HeadContainer>
      <Link to="/">
        <Logo src={logo} />
      </Link>
      <Menu>
        <MenuItem>
          <Link to="/sign-up">{'회원가입'}</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/login">{'로그인'}</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/mypage">{'마이페이지'}</Link>
        </MenuItem>
      </Menu>
    </HeadContainer>
  );
};

export default Nav;
