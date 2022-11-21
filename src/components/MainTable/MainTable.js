import React from 'react';
import BodyPart from '../BodyPart/BodyPart';
export default function MainTable(props) {
  const { setAmmountBodyPrice } = props;
  const [bodyPartArr, setBodyPartArr] = React.useState([
    {
      id: Math.random(),
      bodyPartName: '',
      bodyPartPrice: '',
      bodyPartCount: '',
      bodyPartTotalPrice: '',
    },
  ]);

  const handleAddBodyPart = () => {
    const newBodyPart = {
      id: Math.random(),
      bodyPartName: '',
      bodyPartPrice: '',
      bodyPartCount: 1,
      bodyPartTotalPrice: 0,
    };

    bodyPartArr.push(newBodyPart);
    setBodyPartArr([...bodyPartArr]);
  };

  // состояние для рендеринга части кузова
  const [onUpdatуBodyPart, setOnUpdateBodyPart] = React.useState(false);
  // рендерим компонент при обновлении информации
  React.useEffect(() => {}, [onUpdatуBodyPart]);

  // функция просчёта суммы всех ЧАСТЕЙ КУЗОВА для прокидывания в стейт выше
  const calcSumAllBodyPart = () => {
    const sumOfAllBodyPart = bodyPartArr.reduce(
      (a, b) => a + b.bodyPartTotalPrice,
      0
    );
    // передаём просчитанную сумму всех ЧАСТЕЙ КУЗОВА
    setAmmountBodyPrice(sumOfAllBodyPart);
  };

  const handleDeleteBodyPart = (bodyCardItem) => {
    const numberItemForDelete = bodyPartArr.indexOf(bodyCardItem);
    bodyPartArr.splice(numberItemForDelete, 1);
    setBodyPartArr([...bodyPartArr]);
    calcSumAllBodyPart();
  };

  const handleEditBodyPartName = (bodyCard, e) => {
    // достаём искомую часть кузова и меняем текущее значение
    const newBodyPartName = e.target.value;

    bodyPartArr.map((item) => {
      if (item.id === bodyCard.id) {
        item.bodyPartName = newBodyPartName;
      }
    });
  };

  // стейт актуального значения суммы запчастей
  const [totalBodyPrice, setTotalBodyPrice] = React.useState(0);
  const setBodyPartTotalPrice = (bodyCardId, partTotalPrice) => {
    setTotalBodyPrice(partTotalPrice);
    bodyPartArr.map((item) => {
      if (item.id === bodyCardId) {
        item.bodyPartTotalPrice = partTotalPrice;
      }
    });
    calcSumAllBodyPart();
    setOnUpdateBodyPart(!onUpdatуBodyPart);
  };

  const handleEditBodyPartPrice = (bodyCard, e) => {
    // достаём искомую часть кузова и меняем текущее значение
    const newBodyPartPrice = e.target.value;

    bodyPartArr.map((item) => {
      if (item.id === bodyCard.id) {
        item.bodyPartPrice = newBodyPartPrice;
        item.bodyPartTotalPrice = item.bodyPartPrice * item.bodyPartCount;
      }
    });
    calcSumAllBodyPart();
    setOnUpdateBodyPart(!onUpdatуBodyPart);
  };

  const handleEditBodyPartCount = (bodyCard, e, partsArrayLength) => {
    const newBodyPartCount = e.target.value;
    bodyPartArr.map((item) => {
      if (item.id === bodyCard.id && partsArrayLength === 0) {
        item.bodyPartCount = newBodyPartCount;
        item.bodyPartTotalPrice = item.bodyPartPrice * item.bodyPartCount;
      } else if (item.id === bodyCard.id && partsArrayLength >= 1) {
        // нужна сумма всех запчастей в карточке, а не тотал части кузова!
        item.bodyPartCount = newBodyPartCount;
        item.bodyPartTotalPrice = totalBodyPrice * item.bodyPartCount;
      }
    });
    calcSumAllBodyPart();
    setOnUpdateBodyPart(!onUpdatуBodyPart);
  };

  return (
    <div className='main-table'>
      <div className='maintable__header'>
        <div className='maintable__header-item'>
          Калькулятор для ремонта авто
        </div>
        <button onClick={handleAddBodyPart}> Добавить деталь кузова</button>
      </div>
      <ul className='body-part'>
        {bodyPartArr.map((item) => (
          <BodyPart
            key={item.id}
            bodyCard={item}
            onDeleteBodyPart={handleDeleteBodyPart}
            onEditBodyPartName={handleEditBodyPartName}
            onEditBodyPartPrice={handleEditBodyPartPrice}
            onEditBodyPartCount={handleEditBodyPartCount}
            setBodyPartTotalPrice={setBodyPartTotalPrice}
          />
        ))}
      </ul>
    </div>
  );
}
