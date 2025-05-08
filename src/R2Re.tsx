//르노 선택 페이지 - Update 0508
import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { setModel } from './store/carSlice'; 
import { AppDispatch } from './store/store';
interface Car{
  model_name: string;
  img : string;
  select: boolean;
}
export default function R2Re() {
    const [Renaultcars, SetRenaultcars] = useState<Car[]>([
        { model_name: 'sm3', img: '/Re/sm3.PNG', select: false },
        { model_name: 'sm5', img: '/Re/sm5.PNG', select: false },
        { model_name: 'sm6', img: '/Re/sm6.PNG', select: false },
        { model_name: 'sm7', img: '/Re/sm7.PNG', select: false },
        { model_name: 'qm3', img: '/Re/qm3.PNG', select: false },
        { model_name: 'qm5', img: '/Re/qm5.PNG', select: false },
        { model_name: 'qm6', img: '/Re/qm6.PNG', select: false },
        { model_name: 'xm3', img: '/Re/xm3.PNG', select: false },
    ]);
    const dispatch = useDispatch<AppDispatch>();
    const ImgClick = (clicked_model_name : string) => {
        const newRenaultcars = Renaultcars.map((car) =>
            car.model_name === clicked_model_name ? { ...car, select: !car.select } : { ...car, select: false }
        )
        SetRenaultcars(newRenaultcars);
        dispatch(setModel(clicked_model_name));
    }
    return (
        <div>
            <h1 className="text-position">차종을 선택해주세요</h1>
            <div className="car-list2">
            {Renaultcars.map((car) => (
                <div key ={car.model_name} className={car.select ? 'car-container-select' : 'car-container-default'}>
                <img src={car.img} alt={car.model_name} onClick={() => ImgClick(car.model_name)}/>
                <p className="car-name">{car.model_name}</p>
                </div>
            ))}
         </div>
        </div>
    );
}