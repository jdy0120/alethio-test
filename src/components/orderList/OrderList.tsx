import React from 'react';
import { Item } from '../../types';
import { fetchOrder } from '../../utils/fetchAPI';
import OrderItem from './OrderItem';

const OrderList = () => {
  const [orderItems, setOrderItems] = React.useState<Item[]>([]);
  const [page, setPage] = React.useState(0);
  const [loading, setLoading] = React.useState(true);

  const getOrderItems = async (page: number) => {
    setLoading(true);
    const response = await fetchOrder({ page });

    setOrderItems(response.content);
    setLoading(false);
  };

  React.useEffect(() => {
    getOrderItems(page);
  }, [page]);

  return (
    <>
      {loading ? (
        <p>{`불러오는 중`}</p>
      ) : (
        <>
          {orderItems.map((el, index) => {
            return (
              <OrderItem id={el.id} itemName={el.itemName} index={index} />
            );
          })}
        </>
      )}
    </>
  );
};

export default OrderList;
