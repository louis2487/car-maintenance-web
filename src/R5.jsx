import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setMileage } from './store/carSlice.js';

export default function R5({ mileage, onChange }) {
  const dispatch = useDispatch();

  let box = (
    <div className="mileage-input-container">
      <label htmlFor="mileage" className="mileage-label">주행거리(km)</label>
      <input
        type="number"
        id="mileage"
        className="mileage-input"
        value={mileage}
        onChange={(e) => dispatch(setMileage(e.target.value))}
        min="0"
        placeholder="예: 45000"
      />
    </div>
  );
  return (
    <div>
      <h1 className="text-position">누적 주행거리를 입력해주세요</h1>
      {box}
    </div>
  );
}
