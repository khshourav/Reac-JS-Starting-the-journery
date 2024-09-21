import { useState } from "react";


const Basic4 = () => {
    const [text, setText] = useState("This is Text 1");
    const [text1, setText1] = useState('true');
    // let text1 = true;
    const changeText =() =>{
        if(text1){
            setText("Ta Da!This is the changed Text!");
            setText1(false);
        }
        else{
            setText("This is Text 1");
            setText1(true);
        }
        
        
    }
    // const reText =() =>{
    //     setText("This is Text 1");
        
    // }
    
    return ( 
        <div className="sec Basic4">
            <p className="code-no">code 4 : [Toggle] Clicking one button to alternate between text content</p>
            <h1>{text}</h1>
            <button onClick={changeText}>Toggle Text</button>
        </div>
     );
}
 
export default Basic4;