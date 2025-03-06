import { useState } from 'react';
import LandingPage from './pages/LandingPage';

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className=''>
    <LandingPage/>
   </div>
  )
}

export default App
