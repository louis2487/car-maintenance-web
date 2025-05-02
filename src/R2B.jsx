import { object } from "framer-motion/client";
import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { setModel } from './store/carSlice.js'; 

export default function R2B({ onSelect }) {
    const [manufacturers, setManufactures] = useState([
        { name: '3시리즈', img: '/BMW/3시리즈.PNG', select: false },
        { name: '5시리즈', img: '/BMW/5시리즈.PNG', select: false },
        { name: '7시리즈', img: '/BMW/7시리즈.PNG', select: false },
        { name: 'i4', img: '/BMW/i4.PNG', select: false },
        { name: 'ix', img: '/BMW/ix.PNG', select: false },
        { name: 'x3', img: '/BMW/x3.PNG', select: false },
        { name: 'x5', img: '/BMW/x5.PNG', select: false },
      
      
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