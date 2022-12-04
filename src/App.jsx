import React from 'react';
import './App.css';
import {useConfirm, useAlert} from './components/Dialog'

const App = () => {
  const [Alert, showAlert] = useAlert(
    'Are you sure?',
    '你真的要確定内?',
  )
  const [Confirm, showConfirm] = useConfirm(
    'Are you sure?',
    '你真的要確定内?',
  )

  const handleAlert = async () => {
    const ans = await showAlert()
    console.log(ans)
  }

  const handleConfirm = async () => {
    const ans = await showConfirm()
    console.log(ans)
  }

  return (
    <div className="App">
      <button onClick={handleAlert}>Alert</button>
      <button onClick={handleConfirm}>Comfirm</button>
      <Alert/>
      <Confirm/>
    </div>
  );
};

export default App;