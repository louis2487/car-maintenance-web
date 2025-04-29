import { object } from "framer-motion/client";
import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { setModel } from './store/carSlice.js'; 

export default function R2H({ onSelect }) {
    const [manufacturers, setManufactures] = useState([
        { name: '캐스퍼', img: '/casper.PNG', select: false },
        { name: '아반떼', img: '/avandde.PNG', select: false },
        { name: '소나타', img: '/sonata.PNG', select: false },
        { name: '그랜저', img: '/grenser.PNG', select: false },
        { name: '아이오닉5', img: '/ionic5.PNG', select: false },
        { name: '아이오닉6', img: '/ionic6.PNG', select: false },
        { name: '아이오닉9', img: '/ionic9.PNG', select: false },
        { name: '베뉴', img: '/benew.PNG', select: false },
        { name: '코나', img: '/cona.PNG', select: false },
        { name: '투싼', img: '/toossan.PNG', select: false },
        { name: '넥소', img: '/nexso.PNG', select: false },
        { name: '펠리세이드', img: '/peliseid.PNG', select: false },
        { name: '스타리아', img: '/staria.PNG', select: false },
        { name: '포터', img: '/poter.PNG', select: false },
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
