import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import './App.css'
import { setInput,setOperation,setOutput } from './store/checklistSlice.js';


function CheckboxItem({ list, handler, index }) {
  return (
    <div className="wrap"><input type="checkbox"
      className="checkbox"
      onChange={() => handler(index)} />
      <div className="font-size40">{list.name}</div></div>
  )
}
function Inbox({ label, placeholder, handler, index, type }) {
  return (
    <div className="mileage-input-container">
      <label htmlFor="mileage" className="gray-label">{label}</label>
      <input
        type={type}
        id="change-mileage"
        onKeyDown={(e) => {
          if (e.key == 'Enter') { handler(e.target.value, index) }
        }}
        className="input-box"
        min="0"
        placeholder={placeholder} />
    </div>
  )
}
function Outbox({ label, value }) {
  return (
    <div className='wrap2'>
      <label htmlFor="mileage" className="black-label">{label}</label>
      <div className='black-label-size'> {value}</div></div>
  )
}

export default function R6() {
  const dispatch = useDispatch();
  const step = useSelector((state) => state.mycar.step);

  const carkm = useSelector((state) => state.mycar.mileage);
  const caryear = useSelector((state) => state.mycar.year);

  const inilist = useSelector((state) => state.mylist.R6list);
  const listcheck = useSelector(state => state.mylist.list);
  const [lists, setLists] = useState(inilist);
  const CheckboxChange = (index) => {
    setLists(
      (old) => old.map(
        (list, i) => i === index ? { ...list, in1: !list.in1, in2: !list.in2 } : list)
    );
  };
  const enter1 = (data, index) => {
    setLists(
      (old) => old.map(
        (list, i) => i === index ? { ...list, input1: data, in1: false } : list)
    );
  }
  const enter2 = (data, index) => {
    setLists(
      (old) => old.map(
        (list, i) => i === index ? { ...list, input2: data, in2: false } : list)
    );
  };
  useEffect(() => {
    console.log("Updated list:", listcheck);
  }, [listcheck]);

  useEffect(() => {
    dispatch(setInput(lists));
    dispatch(setOperation({ currentkm: carkm, caryear: caryear }));
    dispatch(setOutput({ currentkm: carkm}));
  }, [step]);

  return (
    <div>
      <h1 className="text-position">소모품 체크리스트를 작성해주세요</h1>
      <div className='scroll'>{lists.map((list, index) => (
        <div className="wrap2" key={list.name}>
          <div className="unit">
            <CheckboxItem list={list} handler={CheckboxChange} index={index} />
            <div className="input-pair">
              {list.in1 ? <Inbox label="교체거리(km):" placeholder="예) 45000" handler={enter1} index={index} type="number" /> : <Outbox label="교체거리" value={list.input1} />}
              {list.in2 ? <Inbox label="교체시점(YY-MM):" placeholder="예) 25-04" handler={enter2} index={index} type="text" /> : <Outbox label="교체시점" value={list.input2} />}
            </div>
          </div>
          <div className='line'></div>
        </div>
      ))};</div>
    </div>
  );
}