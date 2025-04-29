import { object } from "framer-motion/client";
import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { setModel } from './store/carSlice.js'; 

export default function R2G({ onSelect }) {
    const [manufacturers, setManufactures] = useState([
        { name: '모닝', img: '/moning.PNG', select: false },
        { name: '레이', img: '/ray.PNG', select: false },
        { name: 'K3', img: '/k3.PNG', select: false },
        { name: 'K5', img: '/K5.PNG', select: false },
        { name: 'K8', img: '/K8.PNG', select: false },
        { name: 'K9', img: '/K9.PNG', select: false },
        { name: 'EV3', img: '/ev3.PNG', select: false },
        { name: 'EV6', img: '/EV6.PNG', select: false },
        { name: 'EV9', img: '/ev9.PNG', select: false },
        { name: '니로', img: '/neero.PNG', select: false },
        { name: '셀토스', img: '/seltos.PNG', select: false },
        { name: '스포티지', img: '/spotegy.PNG', select: false },
        { name: '타스만', img: '/tasman.PNG', select: false },
        { name: '쏘렌토', img: '/ssorento.PNG', select: false },
        { name: '카니발', img: '/carnibal.PNG', select: false },
        { name: '봉고3', img: '/bonggo3.PNG', select: false },
     
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
