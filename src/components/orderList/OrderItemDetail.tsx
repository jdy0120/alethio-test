import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Item } from '../../types';
import { fetchOrderDetail } from '../../utils/fetchAPI';
import styled from 'styled-components';

const OrderItemDetailContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

interface MatchParams {
  id: string;
}

const OrderItemDetail = ({ match }: RouteComponentProps<MatchParams>) => {
  const [loading, setLoading] = React.useState(true);
  const [itemDetail, setItemDetail] = React.useState<Item>();

  const getItemDetail = async () => {
    setLoading(true);
    const { id } = match.params;
    const detail = await fetchOrderDetail({ id });

    setItemDetail(detail);
    setLoading(false);
  };

  React.useEffect(() => {
    getItemDetail();
  });

  return (
    <>
      {loading ? (
        <p>{`불러오는 중`}</p>
      ) : (
        <>
          <OrderItemDetailContainer>
            <p>{itemDetail?.id}</p>
            <p>{itemDetail?.itemName}</p>
          </OrderItemDetailContainer>
        </>
      )}
    </>
  );
};

export default OrderItemDetail;
