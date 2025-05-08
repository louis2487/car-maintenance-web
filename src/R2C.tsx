//Chevrolet 차종 선택 페이지 - Update 0508
import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { setModel } from './store/carSlice'; 
import { AppDispatch } from './store/store';
interface Car{
  model_name: string;
  img : string;
  select: boolean;
}
export default function R2C() {
    const [Chevroletcars, SetChevroletcars] = useState<Car[]>([
        { model_name: 'Aclass', img: '/Chevrolet/Aclass.PNG', select: false },
        { model_name: 'Bclass', img: '/Chevrolet/Bclass.PNG', select: false },
        { model_name: 'Cclass', img: '/Chevrolet/Cclass.PNG', select: false },
        { model_name: 'Eclass', img: '/Chevrolet/Eclass.PNG', select: false },
        { model_name: 'Sclass', img: '/Chevrolet/Sclass.PNG', select: false },
        { model_name: 'GLA', img: '/Chevrolet/GLA.PNG', select: false },
        { model_name: 'GLC', img: '/Chevrolet/GLC.PNG', select: false },
        { model_name: 'GLE', img: '/Chevrolet/GLE.PNG', select: false },
        { model_name: 'EQA', img: '/Chevrolet/EQA.PNG', select: false },
        { model_name: 'EQB', img: '/Chevrolet/EQB.PNG', select: false },
    ]);
    const dispatch = useDispatch<AppDispatch>();
    const ImgClick = (clicked_model_name : string) => {
        const newChevroletcars = Chevroletcars.map((car) =>
            car.model_name === clicked_model_name ? { ...car, select: !car.select } : { ...car, select: false }
        )
        SetChevroletcars(newChevroletcars);
        dispatch(setModel(clicked_model_name));
    }
    return (
        <div>
            <h1 className="text-position">차종을 선택해주세요</h1>
            <div className="car-list2">
            {Chevroletcars.map((car) => (
                <div key ={car.model_name} className={car.select ? 'car-container-select' : 'car-container-default'}>
                <img src={car.img} alt={car.model_name} onClick={() => ImgClick(car.model_name)}/>
                <p className="car-model_name">{car.model_name}</p>
                </div>
            ))}
         </div>
        </div>
    );
}