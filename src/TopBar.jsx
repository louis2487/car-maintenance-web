import './App.css';
import { useNavigate } from "react-router-dom";
import './Router';
import { useSelector, useDispatch } from 'react-redux'
import { setStep } from './store/carSlice.js';

function TopBar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const routing = (path) => {
    navigate(path);
  };
  const test1 = useSelector((state) => state.mycar.step);
  const test2 = useSelector((state) => state.mycar.brend);
  const test3 = useSelector((state) => state.mycar.model);
  const test4 = useSelector((state) => state.mycar.fuel);
  const test5 = useSelector((state) => state.mycar.year);
  const test6 = useSelector((state) => state.mycar.mileage);

  console.log("step:", test1);
  console.log("brend:", test2);
  console.log("model:", test3);
  console.log("fuel:", test4);
  console.log("year:", test5);
  console.log("mileage:", test6);

  const bartext = ['제조사', '차종', '유종', '연식','주행거리','체크리스트','결과'];
  let bar = (
    <div className="top-bar">
      <div className={`circle-wrapper circle${test1}`}>
        <div className="circle"></div>
        <div className="circle-label">{bartext[test1]}</div>
      </div>
    </div>
  );
  let home = (
    <button className="home-button" onClick={() => {
      dispatch(setStep(0));
      routing('./', 0);
    }
    }>Home</button>
  );
  let next;
  switch (test1) {
    case 0:
      next = (<button className="next-button" onClick={() => {
        routing(`./${test2}`);
        dispatch(setStep(1));
      }}>Next</button>);
      break;
    case 1:
      next = (<button className="next-button" onClick={() => {
        routing(`./fuel`);
        dispatch(setStep(2));
      }}>Next</button>);
      break;
    case 2:
      next = (<button className="next-button" onClick={() => {
        routing(`./year`);
        dispatch(setStep(3));
      }}>Next</button>);
      break;
    case 3:
      next = (<button className="next-button" onClick={() => {
        routing(`./mileage`);
        dispatch(setStep(4));
      }}>Next</button>);
      break;
    case 4:
      next = (<button className="next-button" onClick={() => {
        routing(`./checklist`);
        dispatch(setStep(5));
      }}>Next</button>);
      break;
    case 5:
      next = (<button className="next-button" onClick={() => {
        routing(`./result`);
        dispatch(setStep(6));
      }}>Next</button>);
      break;
      case 6:
        next = (<button className="next-button" onClick={() => {
          routing(`./`);
          dispatch(setStep(0));
        }}>Next</button>);
        break;
    default:
      next = (<h2>nonstep</h2>);
      break;
  }
  return (
    <div>
      {bar}
      {home}{next}
    </div>

  );
}

export default TopBar;