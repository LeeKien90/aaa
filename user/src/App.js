
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Fashion from './components/Fashion';


function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/fashion' element={<Fashion/>}></Route>
      
    </Routes>

    </div>
  );
}

export default App;
