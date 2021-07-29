import React from 'react';
import styled from 'styled-components';
import { useAppContext } from '../_providers/AppProviders';
import { useHistory } from 'react-router-dom';

const ItemContainer = styled.div`
  text-align: center;
`;

const ImgStyle = styled.img`
  width: 300px;
  height: 300px;
`;

const OrderButton = styled.button`
  border-radius: 10px;
  display: inline-block;
  cursor: pointer;
`;

interface Props {
  itemImg: string;
}

const ServiceItem = ({ itemImg }: Props) => {
  const history = useHistory();

  const {
    state: { token },
  } = useAppContext();

  const orderItem = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (token) {
      alert('주문 성공');
    } else {
      alert('로그인을 해주세요');
      history.push('/login');
    }
  };

  return (
    <ItemContainer>
      <ImgStyle src={itemImg} alt="" />
      <div>
        <OrderButton onClick={orderItem}>{`주문하기`}</OrderButton>
      </div>
    </ItemContainer>
  );
};

export default ServiceItem;
