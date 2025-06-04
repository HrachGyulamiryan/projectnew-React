// rfc => Karch Greladzew;
import React, { useState } from 'react';

 function Col(cal) {
    const [test, setTest] = useState();
    const [porc,setPorc] = useState(5)

    const forFuncton = () => {
        // alert('9');
        setPorc(cal * porc)
        console.log(porc)
        alert(test);
    }
    
    const forFunctonNext = (e) => {
        const returnRam = e.target.getAttribute('data');
        setTest(returnRam);
    }

    return {forFuncton, forFunctonNext}
}
 
function Porc(props) {
    const {forFuncton, forFunctonNext} = Col(props.cal)

return (
    <div className='container'>
        <div className="box">
            <div className="block" onClick={forFuncton}style={{color: 'red'}}></div>
        </div>
        <div className="box">
            <div className="block" data="Next Ram;" onClick={(e) => {forFunctonNext(e)}}></div>
        </div>
    </div>
)}

export default Porc

// onClick={forFuncton}   => Gorcarkel;
// onClick={forFuncton()} => Sxal;
// onClick={(e) => { forFunctonNext(e) }} => Bardzracnel Mek ay fucntioni Ners;