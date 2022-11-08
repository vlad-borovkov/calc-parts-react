import React from 'react';

export default function SinglePart({ partCard }) {
  return (
    <li className='single-part__item'>
      <div className='single-part__name'>{partCard.bodyPartName}</div>
      <div className='single-part__price'>{partCard.bodyPartPrice}</div>
      <div className='single-part__count'>{partCard.bodyPartCount}</div>
      <div className='single-part__total-count'>
        {partCard.bodyPartTotalPrice}
      </div>
      <div className='single-part__actions'>
        <button> Удалить </button>
      </div>
    </li>
  );
}
