import { useState } from "react";


const Basic3 = () => {
    const [text, setText] = useState("This is Text 1");

    const changeText =() =>{
        setText("Ta Da!This is the changed Text!");
        
    }
    const reText =() =>{
        setText("This is Text 1");
        
    }
    
    return ( 
        <div className="sec Basic3">
            <p className="code-no">code 3 : Clicking buttons to alternate between text content</p>
            <h1>{text}</h1>
            <button onClick={changeText}>Change Text</button>
            <button onClick={reText}>Reset</button>
        </div>
     );
}
 
export default Basic3;