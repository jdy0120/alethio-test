import React, { createContext } from 'react';
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
      <Logo src={logo} />
      <Menu>
        <MenuItem>
          <Link to="/">{'서비스'}</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/sign-up">{'회원가입'}</Link>
          <Link to="/mypage/order">{'마이페이지'}</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/login">{'로그인'}</Link>
          <Link to="/logout">{'로그아웃'}</Link>
        </MenuItem>
      </Menu>
    </HeadContainer>
  );
};

export default Nav;
