import './App.css';
import Login from './Components/AuthComponents/Login';
import Signup from './Components/AuthComponents/Signup';
import Home from './Components/Pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
    return (
        <>
            <BrowserRouter>
            <Routes>
               <Route path='/' element={<Home/>}/>
               {/* <Route path='/login' element={<Login/>}/> */}
               <Route path='/signup' element={<Signup/>}/>
            </Routes>
            </BrowserRouter>
        </>
    )
}

export default App;
