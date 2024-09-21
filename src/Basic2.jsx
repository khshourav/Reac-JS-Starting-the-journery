import { useState } from "react";


const Basic2 = () => {
    const [text, setText] = useState("This is Text 1");

    const changeText =() =>{
        setText("Ta Da!This is the changed Text!");
    }
    return ( 
        <div className="sec Basic2">
            <p className="code-no">code 2 : Changing text content by clicking a button</p>
            <h1>{text}</h1>
            <button onClick={changeText}>Change Text</button>
        </div>
     );
}
 
export default Basic2;