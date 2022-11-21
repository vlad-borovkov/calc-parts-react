import React from 'react';
import SinglePart from '../SinglePart/SinglePart';

export default function BodyPart(props) {
  const {
    bodyCard,
    onEditBodyPartName,
    onEditBodyPartPrice,
    onEditBodyPartCount,
    onDeleteBodyPart,
    setBodyPartTotalPrice,
  } = props;

  const [partsArray, setPartArray] = React.useState([]);
  // состояние для рендеринга строки
  const [onUpdateSinglePart, setOnUpdateSinglePart] = React.useState(false);
  React.useEffect(() => {}, [onUpdateSinglePart]);

  // добавление новой запчасти
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

  // функция суммы стоимости всех запчастей и передачи в стейт выше
  const calcSumAllSingleParts = () => {
    const sumOfAllParts = partsArray.reduce(
      (a, b) => a + b.singlePartTotalPrice,
      0
    );
    // передаём сумму всех ЗАПЧАСТЕЙ внутри ЧАСТИ кузова
    setBodyPartTotalPrice(bodyCard.id, sumOfAllParts);
  };

  const handleDeleteSinglePart = (singlePart) => {
    console.log(singlePart);

    const numberItemForDelete = partsArray.indexOf(singlePart);
    partsArray.splice(numberItemForDelete, 1);
    setPartArray([...partsArray]);
    calcSumAllSingleParts();
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
  //пересчёт суммы при редактировании цены запчасти
  const handleEditSinglePartPrice = (partCard, e) => {
    const newSinglePartPrice = e.target.value;

    partsArray.map((item) => {
      if (item.id === partCard.id) {
        item.singlePartPrice = newSinglePartPrice;
        item.singlePartTotalPrice = item.singlePartPrice * item.singlePartCount;
      }
    });
    calcSumAllSingleParts();
    setOnUpdateSinglePart(!onUpdateSinglePart);
  };
  //пересчёт суммы при редактировании количества запчасти
  const handleEditSinglePartCount = (partCard, e) => {
    const newSinglePartCount = e.target.value;

    partsArray.map((item) => {
      if (item.id === partCard.id) {
        item.singlePartCount = newSinglePartCount;
        item.singlePartTotalPrice = item.singlePartCount * item.singlePartPrice;
      }
    });
    calcSumAllSingleParts();
    setOnUpdateSinglePart(!onUpdateSinglePart);
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
        <span>Деталь кузова</span>
        <input
          type='text'
          className='body-part__name'
          defaultValue={bodyCard.bodyPartName}
          onInput={(e) => onEditBodyPartName(bodyCard, e)}
        />
        <input
          type='number'
          className={
            partsArray.length >= 1 ? `body-part__price_off` : `body-part__price`
          }
          defaultValue={bodyCard.bodyPartPrice}
          onInput={(e) => onEditBodyPartPrice(bodyCard, e)}
          min={'0'}
        />
        <input
          type='number'
          className='body-part__count'
          defaultValue={bodyCard.bodyPartCount}
          onInput={(e) => onEditBodyPartCount(bodyCard, e, partsArray.length)}
        />

        <textarea
          className='body-part__total-price'
          type='text'
          defaultValue={bodyCard.bodyPartTotalPrice}
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
            onDeleteSinglePart={handleDeleteSinglePart}
            onEditSinglePartName={handleEditSinglePartName}
            onEditSinglePartPrice={handleEditSinglePartPrice}
            onEditSinglePartCount={handleEditSinglePartCount}
          />
        ))}
      </ul>
    </li>
  );
}
