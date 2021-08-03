import React from 'react';
import styled from 'styled-components';

const OrderPageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const PageNumber = styled.p`
  cursor: pointer;
  margin-left: 5px;
  margin-right: 5px;
`;

interface Props {
  totalPage: number;
  nowPage: number;
  setNowPage: React.Dispatch<React.SetStateAction<number>>;
}
/**
 * 주문페이지
 */
const OrderPage = ({ nowPage, totalPage, setNowPage }: Props) => {
  const clickPageNumber = (e: React.MouseEvent<HTMLParagraphElement>) => {
    const clickedPageIndex = parseInt(e.currentTarget.innerText);
    setNowPage(clickedPageIndex - 1);
  };

  return (
    <OrderPageContainer>
      {Array(totalPage)
        .fill(0)
        .map((el, index) => {
          if (index === nowPage) {
            return <PageNumber key={index}>{index + 1}</PageNumber>;
          } else {
            return (
              <PageNumber onClick={clickPageNumber} key={index}>
                {index + 1}
              </PageNumber>
            );
          }
        })}
    </OrderPageContainer>
  );
};

export default OrderPage;
