import { useDispatch, useSelector } from 'react-redux';
import { setYear } from './store/carSlice.js';

const YearSelector = () => {
    const dispatch = useDispatch();
    const year = useSelector((state) => state.mycar.year) || new Date().getFullYear();

    const increase = () => {
        if (year < new Date().getFullYear()) {
            dispatch(setYear(year + 1));
        }
    };

    const decrease = () => {
        if (year > 2000) {
            dispatch(setYear(year - 1));
        }
    };

    return (
        <div>
            <h1 className="text-position">연식을 선택해주세요</h1>
            <div className="year-input-container">
                <div className="year-box">{year}년식</div>
                <div className="year-buttons">
                    <button className="year-button" onClick={decrease}>⬇</button>
                    <button className="year-button" onClick={increase}>⬆</button>
                </div>
            </div>
        </div>
    );
};

export default YearSelector;