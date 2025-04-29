import { useState } from 'react';
import './App.css'
import { useDispatch } from 'react-redux'
import { setBrend } from './store/carSlice.js'; 

export default function R1({ onSelect }) {
  
  const [manufacturers, setManufactures] = useState([
    { name: 'Hyundai', img: '/hyundai.PNG', select: false },
    { name: 'Kia', img: '/kia.PNG', select: false },
  ]);

  
  const dispatch = useDispatch();
  
  const imgClick = (name) => {
    const newManufactures = manufacturers.map((m) =>
      m.name === name ? { ...m, select: !m.select } : { ...m, select: false }
    )
    setManufactures(newManufactures);
    dispatch(setBrend(name));
  }

  return (
    <div>
      <h1 className="text-position">제조사를 선택해주세요</h1>
      <div className="car-list">
      {manufacturers.map((m) => (
        <img
          key={m.name}
          src={m.img}
          alt={m.name}
          className={m.select ? 'select-img' : 'default-img'}
          onClick={() => imgClick(m.name)}
        />
      ))}
      </div>
    </div>
  );
}
