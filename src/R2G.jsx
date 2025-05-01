import { object } from "framer-motion/client";
import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { setModel } from './store/carSlice.js'; 

export default function R2G({ onSelect }) {
    const [manufacturers, setManufactures] = useState([
        { name: 'G70', img: '/Genesis/G70.PNG', select: false },
        { name: 'G80', img: '/Genesis/G80.PNG', select: false },
        { name: 'G90', img: '/Genesis/G90.PNG', select: false },
        { name: 'GV60', img: '/Genesis/GV60.PNG', select: false },
        { name: 'GV70', img: '/Genesis/GV70.PNG', select: false },
        { name: 'GV80', img: '/Genesis/GV80.PNG', select: false },
 
      
    ]);
    const dispatch = useDispatch();
    const imgClick = (name) => {
        const newManufactures = manufacturers.map((m) =>
            m.name === name ? { ...m, select: !m.select } : { ...m, select: false }
        )
        setManufactures(newManufactures);
        dispatch(setModel(name));
    }
    return (
        <div>
            <h1 className="text-position">차종을 선택해주세요</h1>
            <div className="car-list">
            {manufacturers.map((m) => (
                <div key ={m.name} className={m.select ? 'car-container-select' : 'car-container-default'}>
                <img
                    key={m.name}
                    src={m.img}
                    alt={m.name}
                    onClick={() => imgClick(m.name)}
                />
                <p className="car-name">{m.name}</p>
                </div>
            ))}
         </div>
        </div>
    );
}