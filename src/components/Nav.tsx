import React from 'react';
import Service from './Service';
import LogIn from './LogIn';
import { Route, Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import styled from 'styled-components';

const HeadContainer = styled.header`
  border: 1px solid red;
  height: 100px;
  display: flex;
`;

const LogoContainer = styled.div``;

const Nav = () => {
  return (
    <HeadContainer>
      <LogoContainer>
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </LogoContainer>
      <div>
        <Link to="/login">{'로그인'}</Link>
      </div>
      <Route exact path="/" component={Service} />
      <Route path="/login" component={LogIn} />
    </HeadContainer>
  );
};

export default Nav;
