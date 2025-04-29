import { createSlice } from '@reduxjs/toolkit';


const FuelMap ={
  /*기아*/
  '모닝': ['gasoline'],
  '레이': ['gasoline', 'lpg'],
  'K3': ['gasoline', 'diesel'],
  'K5': ['gasoline', 'hybrid'],
  'K8': ['gasoline', 'hybrid'],
  'K9': ['gasoline'],
  'EV3': ['ev'],
  'EV6': ['ev'],
  'EV9': ['ev'],
  '니로': ['hybrid', 'ev'],
  '셀토스': ['gasoline'],
  '스포티지': ['gasoline', 'diesel', 'hybrid'],
  '타스만': ['gasoline'], 
  '쏘렌토': ['gasoline', 'diesel', 'hybrid'],
  '카니발': ['gasoline', 'diesel'],
  '봉고3': ['diesel'],

  /*현대*/
  '캐스퍼': ['gasoline'],
  '아반떼': ['gasoline', 'hybrid'],
  '소나타': ['gasoline', 'hybrid'],
  '그랜저': ['gasoline', 'hybrid'],
  '아이오닉5': ['ev'],
  '아이오닉6': ['ev'],
  '아이오닉9': ['ev'],
  '베뉴': ['gasoline'],
  '코나': ['gasoline', 'ev', 'hybrid'],
  '투싼': ['gasoline', 'diesel', 'hybrid'],
  '넥소': ['hydrogen'],
  '펠리세이드': ['gasoline', 'diesel'],
  '스타리아': ['diesel'],
  '포터': ['diesel', 'ev'],
}

const carSlice = createSlice({
  name: 'car',
  initialState: {
    step:0,
    fuellist: [],
    brend: null,
    model: null,
    fuel: null,
    year : 2025,
    mileage : 0,
  },
  reducers: {
    setStep: (state, action) => {
      state.step = action.payload;
   },
    setBrend: (state, action) => {
    state.brend = action.payload;
   },
    setModel: (state, action) => {
      state.model = action.payload;
      state.fuellist =  FuelMap[action.payload] || [];
      state.fuel = null;
   },
    setFuel : (state, action) => {
     state.fuel = action.payload;
   },
    setYear: (state, action) => {
     state.year = action.payload;
   },
    setMileage: (state, action) => {
     state.mileage = action.payload;
   },
   
}});

export const { setStep, setBrend, setModel, setFuel, setYear, setMileage  } = carSlice.actions;
export default carSlice.reducer;
