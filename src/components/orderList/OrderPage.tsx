import React from 'react';
import styled from 'styled-components';

const OrderPageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

interface Props {
  totalPage: number;
  nowPage: number;
  setNowPage: React.Dispatch<React.SetStateAction<number>>;
}

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
            return <p key={index}>{index + 1}</p>;
          } else {
            return (
              <p onClick={clickPageNumber} key={index}>
                {index + 1}
              </p>
            );
          }
        })}
    </OrderPageContainer>
  );
};

export default OrderPage;
