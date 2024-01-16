// import logo from './logo.svg';
import { Route,Routes } from 'react-router-dom';
import NavBar from './Components/Navbar';
import Home from './Pages/home';
import './App.css';

function App() {
  return (
    <>
    <NavBar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
    </Routes>
    </>
  );
}

export default App;
