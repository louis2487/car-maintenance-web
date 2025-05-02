import { object } from "framer-motion/client";
import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { setModel } from './store/carSlice.js'; 

export default function R2V({ onSelect }) {
    const [manufacturers, setManufactures] = useState([
        { name: '골프', img: '/Volkswagen/골프.PNG', select: false },
        { name: '티구안', img: '/Volkswagen/티구안.PNG', select: false },
        { name: '아테온', img: '/Volkswagen/아테온.PNG', select: false },
        { name: '파사트', img: '/Volkswagen/파사트.PNG', select: false },
        { name: 'id.4', img: '/Volkswagen/id.4.PNG', select: false },
      
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