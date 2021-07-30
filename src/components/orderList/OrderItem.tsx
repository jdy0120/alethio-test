import { Item } from '../../types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const OrderItemContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

interface Props extends Item {}

const OrderItem = ({ id, itemName }: Props) => {
  return (
    <>
      <OrderItemContainer>
        <p>{id}</p>
        <Link to={`/mypage/order/${id}`}>{itemName}</Link>
      </OrderItemContainer>
    </>
  );
};

export default OrderItem;
