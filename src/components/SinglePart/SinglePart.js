import React from 'react';
import inputMask from '../../utils/inputMask.js'; // доделать маску для цифр

export default function SinglePart(props) {
  const {
    partCard,
    onDeleteSinglePart,
    onEditSinglePartName,
    onEditSinglePartPrice,
    onEditSinglePartCount,
  } = props;

  const handleDeleteBodyPart = () => {
    onDeleteSinglePart(partCard);
  };

  return (
    <li className='single-part__item'>
      <div className='single-part__input-wrap'>
        <label>Запчасть</label>
        <input
          type='text'
          className='single-part__name'
          defaultValue={partCard.singlePartName}
          onInput={(e) => onEditSinglePartName(partCard, e)}
          placeholder='Введите название'
        />
      </div>
      <div className='single-part__input-wrap'>
        <label>Цена</label>
        <input
          type='number'
          className='single-part__price'
          defaultValue={partCard.singlePartPrice}
          onInput={(e) => onEditSinglePartPrice(partCard, e)}
          min='0'
          placeholder='Введите цену'
        />
      </div>
      <div className='single-part__input-wrap'>
        <label>Кол-во</label>
        <input
          type='number'
          className='single-part__count'
          placeholder='Шт'
          defaultValue={partCard.singlePartCount}
          onInput={(e) => onEditSinglePartCount(partCard, e)}
          min='0'
        />
      </div>
      <div className='single-part__input-wrap'>
        <label>Общая стоимость</label>
        <textarea
          className='single-part__total-price'
          type='number'
          placeholder='Итого'
          defaultValue={partCard.singlePartTotalPrice}
          readOnly
          cols={10}
          rows={1}
        />
      </div>

      <div className='single-part__actions'>
        <button onClick={handleDeleteBodyPart}> Удалить </button>
      </div>
    </li>
  );
}
