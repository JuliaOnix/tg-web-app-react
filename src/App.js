import { useEffect } from 'react';
import './App.css';
import { useTelegram } from '../src/hooks/useTelegram';
import Header from './Components/Header/Header';
import {Route, Routes} from 'react-router-dom'
import Form from './Components/Form/Form';
import ProductList from './Components/ProductList/ProductList';

function App() {

  const {tg} = useTelegram();
  
  useEffect(() => {
    tg.ready();
  }, [])

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<ProductList></ProductList>}/>
        <Route path={'form'} element={<Form></Form>}/>
      </Routes>
    </div>
  );
}

export default App;
