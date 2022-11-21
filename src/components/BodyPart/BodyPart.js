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
      singlePartPrice: '',
      singlePartCount: '',
      singlePartTotalPrice: '',
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
      <div className='body-part__field'>
        <div className='body-part__input-wrap'>
          <label className='body-part__header-item'>Деталь кузова</label>
          <input
            type='text'
            className='body-part__name'
            defaultValue={bodyCard.bodyPartName}
            onInput={(e) => onEditBodyPartName(bodyCard, e)}
            placeholder='Введите название'
          />
        </div>
        <div
          className={
            partsArray.length >= 1
              ? `body-part__price_off`
              : `body-part__input-wrap`
          }
        >
          <label className='body-part__header-item'>Цена</label>
          <input
            type='number'
            className='body-part__price'
            defaultValue={bodyCard.bodyPartPrice}
            onInput={(e) => onEditBodyPartPrice(bodyCard, e)}
            min='0'
            placeholder='Введите цену'
          />
        </div>

        <div className='body-part__input-wrap'>
          <label className='body-part__header-item'>Количество</label>
          <input
            type='number'
            className='body-part__count'
            defaultValue={bodyCard.bodyPartCount}
            onInput={(e) => onEditBodyPartCount(bodyCard, e, partsArray.length)}
            min='0'
          />
        </div>
        <div className='body-part__input-wrap'>
          <label className='body-part__header-item'>Общая стоимость</label>
          <textarea
            className='body-part__total-price'
            type='text'
            defaultValue={bodyCard.bodyPartTotalPrice}
            readOnly
            cols={10}
            rows={1}
            placeholder='Итого'
          />
        </div>

        <div className='body-part__actions'>
          <p className='body-part__header-item'>Действия</p>
          <button onClick={handleDeleteBodyPart}>Удалить деталь</button>
          <button onClick={handleAddSinglePart}> Добавить запчасть</button>
        </div>
      </div>
      {partsArray.length >= 1 && (
        <fieldset className='single-part__field'>
          <legend> Запчасти: </legend>
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
        </fieldset>
      )}
    </li>
  );
}
