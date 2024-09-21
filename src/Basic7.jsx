import { useState } from "react";
const Basic7
 = () => {

    const [count, setCount] = useState(0)
    const handleClick = ()=>{
        setCount(count+1);
    }
    const clearCount = ()=>{
        setCount(0);
    }
    return ( 
        <div className="sec Basic3">
            <p className="code-no">code 7 : Clicking buttons to update count</p>
            <h1> Clicked: {count}</h1>
            <button onClick={handleClick}>Click me! ({count}) </button>
            <button onClick={clearCount}>Reset </button>
            
        </div>
     );
}
 
export default Basic7
;