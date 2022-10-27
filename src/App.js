import { useEffect } from 'react';
import './App.css';
import { useTelegram } from '../src/hooks/useTelegram';
import Header from './Components/Header/Header';

function App() {

  const {tg, onToggleButton} = useTelegram();
  
  useEffect(() => {
    tg.ready();
  }, [])

  return (
    <div className="App">
      <Header />
      <button onClick={onToggleButton}>Toggle</button>
    </div>
  );
}

export default App;
