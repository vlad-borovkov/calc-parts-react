import React from 'react';
import './index.css';
import MainTable from './components/MainTable/MainTable';
import AmmountPrice from './components/AmmountPrice/AmmountPrice';

function App() {
  const [ammountBodyPrice, setAmmountBodyPrice] = React.useState(0);

  return (
    <div className='page'>
      <MainTable setAmmountBodyPrice={setAmmountBodyPrice} />
      <AmmountPrice ammountBodyPrice={ammountBodyPrice} />
    </div>
  );
}

export default App;
