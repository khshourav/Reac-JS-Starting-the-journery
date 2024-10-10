import { useState } from "react";


const Basic8 = () => {

    const [result, setResult] = useState(0);

    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');

    function handleChange(event, n){
        if(n===1){
            setInput1(event.target.value);
        }
        if(n===2){
            setInput2(event.target.value);
        }
        
    }

    function plus(){
        setResult(Number(input1) + Number(input2));
    }
    return ( 
        <div >
            <h1> Sum</h1>
            <div className="min-box">
            <input onChange={(event)=> handleChange(event, 1)} type="number" /> 
            <h1> + </h1> 
            <input onChange={(event)=> handleChange(event, 2)} type="number" /> 
            <button onClick={plus}> = </button> 
            <h1 id="plus"> {result} </h1>
            </div>
        </div>
     );
}
 
export default Basic8;