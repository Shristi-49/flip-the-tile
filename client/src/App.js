import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom' 
import {Home} from './pages/Home'
import {GameBoard} from './pages/GameBoard'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/game/:level' element={<GameBoard />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
