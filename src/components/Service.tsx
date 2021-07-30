import styled from 'styled-components';
import item1 from '../assets/item1.png';
import item2 from '../assets/item2.jpeg';
import item3 from '../assets/item3.jpeg';
import ServiceItem from './ServiceItem';

const ServiceContainer = styled.div`
  width: 100%;
  justify-content: space-around;
  display: flex;
`;

const Service = () => {
  return (
    <>
      <ServiceContainer>
        <ServiceItem itemImg={item1} />
        <ServiceItem itemImg={item2} />
        <ServiceItem itemImg={item3} />
      </ServiceContainer>
    </>
  );
};

export default Service;
