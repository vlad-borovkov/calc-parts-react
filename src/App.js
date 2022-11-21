import React from 'react';
import './index.css';
import MainTable from './components/MainTable/MainTable';
import AmmountPrice from './components/AmmountPrice/AmmountPrice';

function App() {
  const [AmmountBodyPrice, setAmmountBodyPrice] = React.useState(0);

  return (
    <div className='page'>
      {console.log(AmmountBodyPrice)}
      <MainTable setAmmountBodyPrice={setAmmountBodyPrice} />
      <AmmountPrice />
    </div>
  );
}

export default App;
