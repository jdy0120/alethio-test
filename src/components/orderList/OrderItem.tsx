import { Item } from '../../types';

interface Props extends Item {
  index: number;
}

const OrderItem = ({ id, itemName, index }: Props) => {
  return (
    <div key={index}>
      <p>{id}</p>
      <p>{itemName}</p>
    </div>
  );
};

export default OrderItem;
