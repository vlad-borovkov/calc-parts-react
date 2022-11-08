import React from 'react';
import BodyPart from '../BodyPart/BodyPart';
export default function MainTable() {
  const [bodyPartArr, setBodyPartArr] = React.useState([
    {
      id: Math.random(),
      bodyPartName: 'Дверь',
      bodyPartPrice: '1200',
      bodyPartCount: '1',
      bodyPartTotalPrice: '1200',
    },
  ]);

  const handleAddBodyPart = () => {
    const newBodyPart = {
      id: Math.random(),
      bodyPartName: '',
      bodyPartPrice: '',
      bodyPartCount: '',
      bodyPartTotalPrice: '',
    };

    bodyPartArr.push(newBodyPart);

    setBodyPartArr([...bodyPartArr]);
  };

  const handleDeleteBodyPart = (bodyCardItem) => {
    const numberItemForDelete = bodyPartArr.indexOf(bodyCardItem);
    console.log(numberItemForDelete);

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
      }
    });
  };

  const handleEditBodyPartCount = (bodyCard, e) => {
    const newBodyPartCount = e.target.value;

    bodyPartArr.map((item) => {
      if (item.id === bodyCard.id) {
        item.bodyPartCount = newBodyPartCount;
      }
    });
  };

  const onChangeBodyPartAmmount = (bodyCard, e) => {
    const newBodyPartTotalPrice = e.target.value;

    bodyPartArr.map((item) => {
      if (item.id === bodyCard.id) {
        item.bodyPartTotalPrice = newBodyPartTotalPrice;
      }
    });
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
        {bodyPartArr.map((item, index) => (
          <BodyPart
            key={item.id}
            bodyCard={item}
            onDeleteBodyPart={handleDeleteBodyPart}
            onEditBodyPartName={handleEditBodyPartName}
            onEditBodyPartPrice={handleEditBodyPartPrice}
            onEditBodyPartCount={handleEditBodyPartCount}
            onChangeBodyPartAmmount={onChangeBodyPartAmmount}
          />
        ))}
      </ul>
    </div>
  );
}
