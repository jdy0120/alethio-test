import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

interface LinkStyleProps {
  pathname: string;
  nowPath: string;
}

const LinkStyle = styled.div<LinkStyleProps>`
  margin: 10px;
  padding: 10px;
  background-color: ${(props) => {
    return props.nowPath === props.pathname ? `gray` : ``;
  }};
  @media ${(props) => props.theme.mobile} {
    text-align: center;
  }
`;

interface Props {
  to: string;
  children: React.ReactNode;
}

const LinkComponent = ({ to, children }: Props) => {
  const { pathname } = useLocation();

  return (
    <LinkStyle pathname={pathname} nowPath={to}>
      <Link to={to}>{children}</Link>
    </LinkStyle>
  );
};

export default LinkComponent;
