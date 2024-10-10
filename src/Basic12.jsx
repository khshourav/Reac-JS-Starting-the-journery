import { useState } from "react";

const Basic12 = () => {
    const [text, setText] = useState('');

    const handleChange = (event)=>{
        setText(event.target.value);
    }
    return ( 
    <>
    <div className="sec">
    <p className="code-no">code 9 : Directly output the user input as output on dispaly</p>
        <h1>Realtime User Input Update</h1>

        <input onChange={handleChange} type="text"  className="t2"/>
        <h2>Realtime update: {text}</h2>

    </div>

    </> 
    );
}
 
export default Basic12;