import { object } from "framer-motion/client";
import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { setModel } from './store/carSlice.js'; 

export default function R2Ben({ onSelect }) {
    const [manufacturers, setManufactures] = useState([
        { name: 'Aclass', img: '/Benz/Aclass.PNG', select: false },
        { name: 'Bclass', img: '/Benz/Bclass.PNG', select: false },
        { name: 'Cclass', img: '/Benz/Cclass.PNG', select: false },
        { name: 'Eclass', img: '/Benz/Eclass.PNG', select: false },
        { name: 'Sclass', img: '/Benz/Sclass.PNG', select: false },
        { name: 'GLA', img: '/Benz/GLA.PNG', select: false },
        { name: 'GLC', img: '/Benz/GLC.PNG', select: false },
        { name: 'GLE', img: '/Benz/GLE.PNG', select: false },
        { name: 'EQA', img: '/Benz/EQA.PNG', select: false },
        { name: 'EQB', img: '/Benz/EQB.PNG', select: false },
      
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