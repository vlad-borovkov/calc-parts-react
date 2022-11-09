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
      <input
        type='text'
        className='single-part__field-item'
        defaultValue={partCard.singlePartName}
        onInput={(e) => onEditSinglePartName(partCard, e)}
        placeholder='Наименование запчасти'
      />
      <input
        type='number'
        className='single-part__field-item'
        defaultValue={partCard.singlePartPrice}
        onInput={(e) => onEditSinglePartPrice(partCard, e)}
        min='0'
        placeholder='Цена запчасти'
      />
      <input
        type='number'
        className='single-part__field-item'
        defaultValue={partCard.singlePartCount}
        onInput={(e) => onEditSinglePartCount(partCard, e)}
        min='0'
      />
      {console.log(partCard.singlePartTotalPrice)}
      <textarea
        className='single-part__field-item'
        type='number'
        defaultValue={partCard.singlePartTotalPrice}
        onChange={(e) => onChangeSinglePartAmmount(partCard, e)}
        disabled={true}
      />

      <div className='single-part__actions'>
        <button onClick={handleDeleteBodyPart}> Удалить </button>
      </div>
    </li>
  );
}
