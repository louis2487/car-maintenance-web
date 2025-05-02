import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { setModel } from './store/carSlice.js'; 

export default function R2F({ onSelect }) {
    const [manufacturers, setManufactures] = useState([
        { name: '몬데오', img: '/Ford/몬데오.PNG', select: false },
        { name: '브롱코', img: '/Ford/브롱코.PNG', select: false },
        { name: '익스플로러', img: '/Ford/익스플로러.PNG', select: false },
        { name: '퓨전', img: '/Ford/퓨전.PNG', select: false },
        { name: '머스탱', img: '/Ford/머스탱.PNG', select: false },
      
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