import { useState } from 'react';
import './App.css'
import { useDispatch } from 'react-redux'
import { setBrend } from './store/carSlice.js';

export default function R1({ onSelect }) {
  
  const [manufacturers, setManufactures] = useState([
    { name: 'Hyundai', img: '/brands/Hyundai.PNG', select: false },
    { name: 'Kia', img: '/brands/Kia.PNG', select: false },
  { name: 'Genesis', img: '/brands/Genesis.PNG', select: false },
  { name: 'Re', img: '/brands/Re.PNG', select: false },
  { name: 'Toyota', img: '/brands/Toyota.PNG', select: false },
  { name: 'Honda', img: '/brands/Honda.PNG', select: false },
  { name: 'Nissan', img: '/brands/Nissan.PNG', select: false },
  { name: 'Lexus', img: '/brands/Lexus.PNG', select: false },
  { name: 'BMW', img: '/brands/BMW.png', select: false },
  { name: 'Benz', img: '/brands/Benz.png', select: false },
  { name: 'Audi', img: '/brands/Audi.png', select: false },
  { name: 'Volkswagen', img: '/brands/Volkswagen.png', select: false },
  { name: 'Chevrolet', img: '/brands/Chevrolet.png', select: false },
  { name: 'Ford', img: '/brands/Ford.png', select: false },
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
