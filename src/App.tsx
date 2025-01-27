import './App.css'
import HomePage from './pages/home';
import './/styles/global.scss'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainLayout from './components/layout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path='/' element={<HomePage />}></Route>
        </Route>
      </Routes>
    </Router>
  );

};


export default App
