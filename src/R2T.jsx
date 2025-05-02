import { object } from "framer-motion/client";
import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { setModel } from './store/carSlice.js'; 

export default function R2T({ onSelect }) {
    const [manufacturers, setManufactures] = useState([
        { name: '캠리', img: '/Toyota/캠리.PNG', select: false },
        { name: '코롤라', img: '/Toyota/코롤라.PNG', select: false },
        { name: '프리우스', img: '/Toyota/프리우스.PNG', select: false },
        { name: 'RAV4', img: '/Toyota/RAV4.PNG', select: false },
        { name: '하이랜더', img: '/Toyota/하이랜더.PNG', select: false },
        
      
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