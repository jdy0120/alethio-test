import React from 'react';
import Nav from './components/Nav';
import { Switch, Route } from 'react-router-dom';
import SignUp from './components/SignUp';
import MyPage from './components/MyPage';
import Service from './components/Service';
import LogIn from './components/LogIn';
import LogOut from './components/LogOut';

function App() {
  return (
    <>
      <Nav />
      <Switch>
        <Route exact path="/" component={Service} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/login" component={LogIn} />
        <Route path="/mypage/order" component={MyPage} />
        <Route path="/LogOut" component={LogOut} />
      </Switch>
    </>
  );
}

export default App;
