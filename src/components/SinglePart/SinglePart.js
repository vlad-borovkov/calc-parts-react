import React from 'react';
import inputMask from '../../utils/inputMask.js'; // доделать маску для цифр

export default function SinglePart(props) {
  const {
    partCard,
    onUpdateSinglePart,
    onDeleteSinglePart,
    onEditSinglePartName,
    onEditSinglePartPrice,
    onEditSinglePartCount,
    onChangeSinglePartAmmount,
  } = props;

  const handleDeleteBodyPart = () => {
    onDeleteSinglePart(partCard);
  };

  return (
    <li className='single-part__item'>
      <fieldset className='single-part__field'>
        <legend> Запчасть: </legend>
        <input
          type='text'
          className='single-part__name'
          defaultValue={partCard.singlePartName}
          onInput={(e) => onEditSinglePartName(partCard, e)}
          placeholder='Наименование запчасти'
        />
        <input
          type='number'
          className='single-part__price'
          defaultValue={partCard.singlePartPrice}
          onInput={(e) => onEditSinglePartPrice(partCard, e)}
          min='0'
          placeholder='Цена запчасти'
        />
        <input
          type='number'
          className='single-part__count'
          defaultValue={partCard.singlePartCount}
          onInput={(e) => onEditSinglePartCount(partCard, e)}
          min='0'
        />
        <textarea
          className='single-part__total-price'
          type='number'
          defaultValue={partCard.singlePartTotalPrice}
          readOnly
          cols={10}
          rows={1}
        />

        <div className='single-part__actions'>
          <button onClick={handleDeleteBodyPart}> Удалить </button>
        </div>
      </fieldset>
    </li>
  );
}
