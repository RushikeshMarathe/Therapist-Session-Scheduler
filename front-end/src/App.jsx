import LandingPage from './pages/LandingPage';
import { Routes,Route } from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './pages/Login';

function App() {

  return (
   <div className=''>
    <Routes>
        <Route path='/' element = {<LandingPage/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>

    </Routes>
   </div>
  )
}

export default App
