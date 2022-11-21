import React from 'react';
import BodyPart from '../BodyPart/BodyPart';
export default function MainTable() {
  const [bodyPartArr, setBodyPartArr] = React.useState([
    {
      id: Math.random(),
      bodyPartName: '',
      bodyPartPrice: '',
      bodyPartCount: 1,
      bodyPartTotalPrice: 0,
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
  React.useEffect(() => {}, [onUpdatуBodyPart]);

  const handleDeleteBodyPart = (bodyCardItem) => {
    const numberItemForDelete = bodyPartArr.indexOf(bodyCardItem);

    bodyPartArr.splice(numberItemForDelete, 1);

    setBodyPartArr([...bodyPartArr]);
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

  const handleEditBodyPartPrice = (bodyCard, e) => {
    // достаём искомую часть кузова и меняем текущее значение
    const newBodyPartPrice = e.target.value;

    bodyPartArr.map((item) => {
      if (item.id === bodyCard.id) {
        item.bodyPartPrice = newBodyPartPrice;
        item.bodyPartTotalPrice = item.bodyPartPrice * item.bodyPartCount;
      }
    });
    setOnUpdateBodyPart(!onUpdatуBodyPart);
  };

  const handleEditBodyPartCount = (bodyCard, e, partsArrayLength) => {
    const newBodyPartCount = e.target.value;
    console.log(newBodyPartCount, bodyCard, partsArrayLength);

    bodyPartArr.map((item) => {
      if (item.id === bodyCard.id && partsArrayLength === 0) {
        console.log('a');
        item.bodyPartCount = newBodyPartCount;
        item.bodyPartTotalPrice = item.bodyPartPrice * item.bodyPartCount;
      } else if (item.id === bodyCard.id && partsArrayLength >= 1) {
        console.log('b');
        // нужна сумма всех запчастей, а не тотал части кузова!
        const newPrice = item.bodyPartCount * item.bodyPartTotalPrice;
        item.bodyPartTotalPrice = newPrice;
      }
    });
    setOnUpdateBodyPart(!onUpdatуBodyPart);
  };

  // const onChangeBodyPartAmmount = (bodyCard, e) => {
  //   const newBodyPartTotalPrice = e.target.value;

  //   bodyPartArr.map((item) => {
  //     if (item.id === bodyCard.id) {
  //       item.bodyPartTotalPrice = newBodyPartTotalPrice;
  //     }
  //   });
  // };

  const setBodyPartTotalPrice = (bodyCardId, partTotalPrice) => {
    //const newPrice = partTotalPrice;
    //console.log(bodyCardId, partTotalPrice);

    bodyPartArr.map((item) => {
      if (item.id === bodyCardId) {
        item.bodyPartTotalPrice = partTotalPrice;
      }
    });
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
