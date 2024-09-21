import { useState } from "react";
import hutao from './assets/hutao.webp';
import raiden from './assets/raiden-1.webp';

const Basic5 = () => {

    const [img, setImg] = useState(hutao);

    const changeImg = (cImg) => {
        setImg(cImg);
    }
    return ( 
            <div className="sec Basic-5">
                <p className="code-no">code 5 : Switching between images clicking Button</p>
                <div className="album">
                    <div className="frame">
                        <img className="photo" src={img} alt="" />
                    </div>
                    <div className="buttons">
                        <button onClick={()=> {changeImg(hutao)}} >Hu Tao</button>
                        <button onClick={()=> {changeImg(raiden)}} >Raiden Ei</button>
                    </div>
                </div>

            </div> );
}
 
export default Basic5;