import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import './App.css'


function LightItem({ signal, name }) {
    return (
        <div className="wrap">
            <div className={`light light-${signal}`} title={signal} />
            <div className="font-size40">{name}</div></div>
    )
}
function Outbox({ label, value, signal }) {
    return (
        <div className='wrap2'>
            <label htmlFor="mileage" className="black-label">{label}</label>
            <div className='black-label-size'> {value}</div></div>
    )
}
export default function R7() {
    const checklist = useSelector(state => state.mylist.R7list);
    console.log("R7list: ", checklist);
    return (
        <div>
            <h1 className="text-position">결과를 확인하세요</h1>
            <div className='scroll'>{checklist.map((list) => (
                <div className={"wrap2"} key={list.name}>
                    <div className="unit">
                        <LightItem signal={list.signal} name ={list.name}/>
                        <div className="input-pair">
                            <Outbox label="교환 여부" value={list.signaltext} signal= {list.signal}/>
                            <Outbox label="예상 교체거리" value={list.foreseekm} />
                            <Outbox label="예상 교체시점" value={list.foreseetime} />
                        </div>
                    </div>
                    <div className='line'></div>
                </div>
            ))};</div>
        </div>
    );
}