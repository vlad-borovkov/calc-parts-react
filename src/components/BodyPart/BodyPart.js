import React from 'react';
import SinglePart from '../SinglePart/SinglePart';

export default function BodyPart(props) {
  const {
    bodyCard,
    onEditBodyPartName,
    onEditBodyPartPrice,
    onEditBodyPartCount,
    onDeleteBodyPart,
    onChangeBodyPartAmmount,
  } = props;

  const [partsArray, setPartArray] = React.useState([
    {
      id: Math.random(),
      bodyPartName: 'Ручка',
      bodyPartPrice: '1200',
      bodyPartCount: '1',
      bodyPartTotalPrice: '1200',
    },
  ]);

  const handleAddSinglePart = () => {
    const newSinglPart = {
      id: Math.random(),
      bodyPartName: '',
      bodyPartPrice: '',
      bodyPartCount: '',
      bodyPartTotalPrice: '',
    };

    partsArray.push(newSinglPart);

    setPartArray([...partsArray]);
  };

  const handleDeleteBodyPart = () => {
    onDeleteBodyPart(bodyCard);
  };

  return (
    <li className='body-part__item'>
      <div className='body-part__header'>
        <div className='body-part__header-item'>Деталь кузова</div>
        <div className='body-part__header-item'>Цена</div>
        <div className='body-part__header-item'>Количество</div>
        <div className='body-part__header-item'>Общая стоимость</div>
        <div className='body-part__header-item'>Действия</div>
      </div>
      <div className='body-part__field'>
        <input
          type='text'
          className='body-part__field-item'
          defaultValue={bodyCard.bodyPartName}
          onInput={(e) => onEditBodyPartName(bodyCard, e)}
        />
        <input
          type='number'
          className='body-part__field-item'
          defaultValue={bodyCard.bodyPartPrice}
          onInput={(e) => onEditBodyPartPrice(bodyCard, e)}
        />
        <input
          type='number'
          className='body-part__field-item'
          defaultValue={bodyCard.bodyPartCount}
          onInput={(e) => onEditBodyPartCount(bodyCard, e)}
        />
        <textarea
          className='body-part__field-item'
          type='text'
          defaultValue={bodyCard.bodyPartTotalPrice}
          onChange={(e) => onChangeBodyPartAmmount(bodyCard, e)}
          disabled={true}
        />

        <div className='body-part__actions'>
          <button onClick={handleDeleteBodyPart}>Удалить деталь кузова</button>
          <button onClick={handleAddSinglePart}> Добавить запчасть</button>
        </div>
      </div>

      <ul className='single-part'>
        {partsArray.map((item) => (
          <SinglePart
            key={item.id}
            partCard={item}
            handleAddSinglePart={handleAddSinglePart}
          />
        ))}
      </ul>
    </li>
  );
}
