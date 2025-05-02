import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { setModel } from './store/carSlice.js'; 

export default function R2C({ onSelect }) {
    const [manufacturers, setManufactures] = useState([
        { name: '스파크', img: '/Chevrolet/스파크.PNG', select: false },
        { name: '말리부', img: '/Chevrolet/말리부.PNG', select: false },
        { name: '볼트', img: '/Chevrolet/볼트.PNG', select: false },
        { name: '트랙스', img: '/Chevrolet/트랙스.PNG', select: false },
    
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