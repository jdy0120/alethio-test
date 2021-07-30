import React from 'react';
import { Item } from '../../types';
import { fetchOrder } from '../../utils/fetchAPI';
import OrderItem from './OrderItem';
import OrderPage from './OrderPage';

const OrderList = () => {
  const [orderItems, setOrderItems] = React.useState<Item[]>([]);
  const [nowPage, setNowPage] = React.useState(0);
  const [totalPage, setTotalPage] = React.useState(0);
  const [loading, setLoading] = React.useState(true);

  const getOrderItems = async (page: number) => {
    setLoading(true);
    const response = await fetchOrder({ page });

    const { content, totalPages } = response;
    setOrderItems(content);
    setTotalPage(totalPages);
    setLoading(false);
  };

  React.useEffect(() => {
    getOrderItems(nowPage);
  }, [nowPage]);

  return (
    <>
      {loading ? (
        <p>{`불러오는 중`}</p>
      ) : (
        <>
          {orderItems.map((el, index) => {
            return (
              <div key={index}>
                <OrderItem id={el.id} itemName={el.itemName} />
                <hr />
              </div>
            );
          })}
          <OrderPage
            nowPage={nowPage}
            totalPage={totalPage}
            setNowPage={setNowPage}
          />
        </>
      )}
    </>
  );
};

export default OrderList;
