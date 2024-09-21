import { useState } from 'react';
import './style.css';
import Basic1 from './Basic1';
import Basic2 from './Basic2';
import Basic3 from './Basic3';
import Basic4 from './Basic4';
import Basic5 from './Basic5';
import Basic6 from './Basic6';
import Basic7 from './Basic7';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='wrapper'>
      <Basic1></Basic1>
      <Basic2></Basic2>
      <Basic3></Basic3>
      <Basic4></Basic4>
      <Basic5 />
      <Basic6></Basic6>
      <Basic7 />
    </div>
  )
}

export default App
