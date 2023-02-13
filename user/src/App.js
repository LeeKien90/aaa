
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Fashion from './components/Fashion';
import Electronic from './components/Electronic'
import Jewellery from './components/Jewellery';


function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/fashion' element={<Fashion/>}></Route>
      <Route path='/electronic' element={<Electronic/>}></Route>
      <Route path='/jewellery' element={<Jewellery/>}></Route>      
    </Routes>

    </div>
  );
}

export default App;
