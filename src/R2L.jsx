import { object } from "framer-motion/client";
import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { setModel } from './store/carSlice.js'; 

export default function R2L({ onSelect }) {
    const [manufacturers, setManufactures] = useState([
        { name: 'es', img: '/Lexus/es.PNG', select: false },
        { name: 'is', img: '/Lexus/is.PNG', select: false },
        { name: 'nx', img: '/Lexus/nx.PNG', select: false },
        { name: 'rx', img: '/Lexus/rx.PNG', select: false },
      
     
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
