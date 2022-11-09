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
      singlePartName: '',
      singlePartPrice: '',
      singlePartCount: 1,
      singlePartTotalPrice: 0,
    },
  ]);
  // состояние для рендеринга строки
  const [onUpdateSinglePart, setOnUpdateSinglePart] = React.useState(false);
  React.useEffect(() => {}, [onUpdateSinglePart]);

  const handleAddSinglePart = () => {
    const newSinglPart = {
      id: Math.random(),
      singlePartName: '',
      singlePartPrice: 0,
      singlePartCount: 1,
      singlePartTotalPrice: 0,
    };

    partsArray.push(newSinglPart);

    setPartArray([...partsArray]);
  };

  const handleDeleteBodyPart = () => {
    onDeleteBodyPart(bodyCard);
  };

  const handleDeleteSinglePart = (singlePart) => {
    console.log(singlePart);

    // const numberItemForDelete = partsArray.indexOf(singlePart);

    // partsArray.splice(numberItemForDelete, 1);

    // setPartArray([...partsArray]);
  };

  const handleEditSinglePartName = (bodyCard, e) => {
    // достаём искомую часть кузова и меняем текущее значение
    const newSinglePartName = e.target.value;

    partsArray.map((item) => {
      if (item.id === bodyCard.id) {
        item.singlePartName = newSinglePartName;
      }
    });
  };

  const handleEditSinglePartPrice = (bodyCard, e) => {
    const newSinglePartPrice = e.target.value;

    partsArray.map((item) => {
      if (item.id === bodyCard.id) {
        item.singlePartPrice = newSinglePartPrice;
        item.singlePartTotalPrice = item.singlePartPrice * item.singlePartCount;
      }
    });
    setOnUpdateSinglePart(!onUpdateSinglePart);
  };

  const handleEditSinglePartCount = (bodyCard, e) => {
    const newSinglePartCount = e.target.value;

    partsArray.map((item) => {
      if (item.id === bodyCard.id) {
        item.singlePartCount = newSinglePartCount;
        item.singlePartTotalPrice = item.singlePartCount * item.singlePartPrice;
      }
    });

    setOnUpdateSinglePart(!onUpdateSinglePart);
  };

  // слушаем изменения в сумме запчастей
  const handleEditSinglePartAmmount = (bodyCard, e) => {
    const newSinglePartAmmount = e.target.value;

    partsArray.map((item) => {
      if (item.id === bodyCard.id) {
        item.singlePartAmmount = newSinglePartAmmount;
        //console.log(item.singlePartAmmount);
      }
    });
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
          min={'0'}
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
            onUpdateSinglePart={onUpdateSinglePart}
            onDeleteSinglePart={handleDeleteSinglePart}
            handleAddSinglePart={handleAddSinglePart}
            onEditSinglePartName={handleEditSinglePartName}
            onEditSinglePartPrice={handleEditSinglePartPrice}
            onEditSinglePartCount={handleEditSinglePartCount}
            onChangeSinglePartAmmount={handleEditSinglePartAmmount}
          />
        ))}
      </ul>
    </li>
  );
}
