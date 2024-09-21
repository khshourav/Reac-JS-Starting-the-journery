import { useState } from "react";
import raiden1 from './assets/raiden-1.webp';
import mona from './assets/mona.webp';
import ganyu from './assets/ganyu.webp';
import raiden2 from './assets/raiden-2.webp';
import monstad from './assets/monstad.webp';
import inazuma from './assets/inazuma.webp';
import sumeru1 from './assets/sumeru-1.webp';
import sumeru2 from './assets/sumeru-2.webp';



const Basic6 = () => {

    const genshin = [raiden1, mona, ganyu, raiden2, monstad, inazuma, sumeru1, sumeru2];

    const [index, setIndex] = useState(0);
    

    const next = () => {
        const newIndex =(index +1) %genshin.length;
        setIndex(newIndex);
    }

    const previous = () => {
        const newIndex = (index === 0) ? genshin.length - 1 : index - 1;
        if(newIndex <0 ){
            newIndex = 7;
        }
        setIndex (newIndex);
    }

    return ( 
        <div className="sec Basic-6">
            <p className="code-no">code 5 : Switching between images clicking Button</p>
                <div className="album">
                    <div className="frame">
                        <img className="photo" src={genshin[index]} alt="" />
                    </div>
                    <div className="buttons">
                        <button onClick={ previous} > {'<'} </button>
                        <button onClick={ next } > {'>'}</button>
                    </div>
                </div>
        </div>
     );
}
 
export default Basic6;