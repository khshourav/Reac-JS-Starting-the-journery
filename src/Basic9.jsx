import { useState } from "react";


const Basic9 = () => {

    const [result, setResult] = useState(0);

    const [input, setInput] = useState({ input1 :'', input2 : '' });

    function handleChange(event){
        const {name, value} = event.target;

        setInput(prevInputs => ({
            ...prevInputs,
            [name]: value
        }));
        
    }

    function plus(){
        setResult(Number(input.input1) - Number(input.input2));
    }
    return ( 
        <div>
            <h1> Sub</h1>
            <div className="min-box">
            <input name='input1' onChange={handleChange} type="number" /> 
            <h1> - </h1> 
            <input name = 'input2' onChange={handleChange} type="number" /> 
            <button onClick={plus}> = </button> 
            <h1 id="plus"> {result} </h1>
            </div>
        </div>
     );
}
 
export default Basic9;