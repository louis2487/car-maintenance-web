import { object } from "framer-motion/client";
import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { setModel } from './store/carSlice.js'; 

export default function R2A({ onSelect }) {
    const [manufacturers, setManufactures] = useState([
        { name: 'a3', img: '/Audi/a3.PNG', select: false },
        { name: 'a4', img: '/Audi/a4.PNG', select: false },
        { name: 'a6', img: '/Audi/a6.PNG', select: false },
        { name: 'q5', img: '/Audi/q5.PNG', select: false },
        { name: 'q7', img: '/Audi/q7.PNG', select: false },
        { name: 'e-tron', img: '/Audi/e-tron.PNG', select: false },
      
      
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
            <div className="car-list2">
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