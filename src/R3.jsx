import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { setFuel } from './store/carSlice.js'; 
import { setList } from './store/checklistSlice.js'; 
export default function R3({ onSelect }) {
    const [obj, setObj] = useState([
        { name: '가솔린', value:'gasoline', img: '/fuels/gasoline.PNG', select: false },
        { name: '디젤',value:'diesel', img: '/fuels/diesel.PNG', select: false },
        { name: 'LPG', value:'lpg',img: '/fuels/lpg.PNG', select: false },
        { name: '전기', value:'electric', img: '/fuels/electric.PNG', select: false },
        { name: '하이브리드',value:'hybrid', img: '/fuels/hybrid.PNG', select: false },
    ]);
    const fuels = useSelector((state) => state.mycar.fuellist);
    const dispatch = useDispatch();

    const imgClick = (a) => {
        const objs = obj.map((m) =>
            m.name === a.name ? { ...m, select: !m.select } : { ...m, select: false }
        )
        setObj(objs);
        dispatch(setFuel(a.value));
        dispatch(setList(a.value));
    }
    return (
        <div>
            <h1 className="text-position">유종을 선택해주세요</h1>
            <div className="car-list">
            {obj
            .filter((m) => fuels.includes(m.value))
            .map((m) => (
                <div key ={m.name} className={m.select ? 'car-container-select' : 'car-container-default'}>
                <img
                    key={m.name}
                    src={m.img}
                    alt={m.name}
                    onClick={() => imgClick(m)}
                />
                <p className="car-name">{m.name}</p>
                </div>
            ))}
         </div>
        </div>
    );
}