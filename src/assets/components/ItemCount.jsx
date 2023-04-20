import React from 'react';
import Button from 'react-bootstrap/Button';

const ItemCount = ({ selectedQuantity, setSelectedQuantity, stock }) => {
  const handleDecrease = () => {
    if (selectedQuantity > 1) {
      setSelectedQuantity(selectedQuantity - 1);
    }
  };

  const handleIncrease = () => {
    if (selectedQuantity < stock) {
      setSelectedQuantity(selectedQuantity + 1);
    }
  };

  return (
    <div className="item-count">
      <Button variant="secondary" onClick={handleDecrease}>
        -
      </Button>
      <span className="quantity">{selectedQuantity}</span>
      <Button variant="secondary" onClick={handleIncrease}>
        +
      </Button>
    </div>
  );
};

export default ItemCount;
