import React, { useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { setMileage } from './store/carSlice.js';


function Outbox({value, hendler }) {
  return (
    <div className='wrap5' onClick={hendler}>
      <label htmlFor="mileage" className="black-label">주행거리(km)</label>
      <div className='black-label2'> {value}</div></div>
  )
}
function Inbox({value, hendler1, hendler2, hendler3}){
  return(
  <div className="container2">
      <label htmlFor="mileage" className="mileage-label">주행거리(km)</label>
      <input
        type="number"
        id="mileage"
        className="input5"
        value={value}
        onKeyDown ={hendler1}
        onChange={hendler2}
        onBlur = {hendler3}
        min="0"
        placeholder="예: 45000"
      />
    </div>
  )
}
export default function R5() {
  const [isdata, setIsdata] = useState(false);
  const dispatch = useDispatch();
  const carkm = useSelector((state) => state.mycar.mileage);
  
  const Inputhandler = (e) => {
    dispatch(setMileage(parseInt(e.target.value)));
  };
  const Keyhendler=(e)=>{
    if (e.key == 'Enter') { setIsdata(true); }
  };
  const Blurhendler=(e)=>{
    setIsdata(true);
  }
  const Clickhendler=(e)=>{
    setIsdata(false);
  };
  return (
    <div>
      <h1 className="text-position">누적 주행거리를 입력해주세요</h1>
      {isdata ? <Outbox value={carkm} hendler={Clickhendler} />:<Inbox value={carkm} hendler1={Keyhendler} hendler2={Inputhandler} hendler3={Blurhendler}/>}
    </div>
  );
}
