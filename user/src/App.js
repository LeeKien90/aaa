
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/user/Home';
import Fashion from './components/user/Fashion';
import Dashboard from './components/admin/Dashboard';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/fashion' element={<Fashion/>}></Route>
      <Route path='/admin' element={<Dashboard/>}></Route>
    </Routes>

    </div>
  );
}

export default App;
