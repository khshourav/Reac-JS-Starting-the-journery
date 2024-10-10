import { useState } from 'react';
import './style.css';
import Basic1 from './Basic1';
import Basic2 from './Basic2';
import Basic3 from './Basic3';
import Basic4 from './Basic4';
import Basic5 from './Basic5';
import Basic6 from './Basic6';
import Basic7 from './Basic7';
import Basic8 from './Basic8';
import Basic9 from './Basic9';
import Basic10 from './Basic10';
import Basic11 from './Basic11';
import Basic12 from './Basic12';
import Basic13 from './Basic13';
import Basic14 from './Basic14';


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
      <div className="sec Basic3">
      <p className="code-no">code 8 : Basic Calucation. Getting User input and access practice</p>
      <h1> Basic Aritmatics</h1>
        <div className="min-box">
        <Basic8></Basic8>
        <Basic9 />
        <Basic10></Basic10>
        <Basic11></Basic11>
        </div>
      </div>
      <Basic12 />
      <Basic13 />
      <Basic14 />
      
    </div>
  )
}

export default App
