import React from 'react';
import { useAppContext } from '../_providers/AppProviders';
import { useHistory } from 'react-router';

const LogOut = () => {
  const history = useHistory();
  const { removeToken } = useAppContext();
  React.useEffect(() => {
    removeToken();
    history.push('/');
  });

  return <>{'로그아웃'}</>;
};

export default LogOut;
