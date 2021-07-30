import React from 'react';
import Nav from './components/Nav';
import { Switch, Route } from 'react-router-dom';
import SignUp from './components/signup/SignUp';
import MyPage from './components/MyPage';
import Service from './components/Service';
import LogIn from './components/LogIn';
import LogOut from './components/LogOut';
import OrderItemDetail from './components/orderList/OrderItemDetail';

function App() {
  return (
    <>
      <Nav />
      <Switch>
        <Route exact path="/" component={Service} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/login" component={LogIn} />
        <Route exact path="/mypage/order" component={MyPage} />
        <Route path="/LogOut" component={LogOut} />
        <Route path="/mypage/order/:id" component={OrderItemDetail} />
      </Switch>
    </>
  );
}

export default App;
