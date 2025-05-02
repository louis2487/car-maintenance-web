import { object } from "framer-motion/client";
import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { setModel } from './store/carSlice.js'; 

export default function R2Re({ onSelect }) {
    const [manufacturers, setManufactures] = useState([
        { name: 'sm3', img: '/Re/sm3.PNG', select: false },
        { name: 'sm5', img: '/Re/sm5.PNG', select: false },
        { name: 'sm6', img: '/Re/sm6.PNG', select: false },
        { name: 'sm7', img: '/Re/sm7.PNG', select: false },
        { name: 'qm3', img: '/Re/qm3.PNG', select: false },
        { name: 'qm5', img: '/Re/qm5.PNG', select: false },
        { name: 'qm6', img: '/Re/qm6.PNG', select: false },
        { name: 'xm3', img: '/Re/xm3.PNG', select: false },
 
      
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