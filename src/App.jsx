import { Routes, Route } from 'react-router-dom';
import './App.css';
import Signin from './Pages/Signin';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Signin />} />
    </Routes>
  );
}

export default App;
