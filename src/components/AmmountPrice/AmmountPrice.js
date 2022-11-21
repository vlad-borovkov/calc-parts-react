import React from 'react';
import { NumberFormatBase } from 'react-number-format';

const AmmountPrice = (props) => {
  const { ammountBodyPrice } = props;

  const format = (numStr) => {
    if (numStr === '') return '';
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'KZT',
      maximumFractionDigits: 0,
    }).format(numStr);
  };

  return (
    <div className='ammount-price'>
      <p className='ammount-price__title'>Общая стоимость закупки</p>

      <p className='ammount-price__price'>
        <NumberFormatBase value={ammountBodyPrice} format={format} />
      </p>
    </div>
  );
};

export default AmmountPrice;
