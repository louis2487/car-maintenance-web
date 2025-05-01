import { createSlice } from "@reduxjs/toolkit";

const AllItem = ["브레이크 패드", "브레이크 오일", "파워스티어링 오일", "에어컨 필터", "에어컨 가스", "냉각수", "타이어", "배터리"]
const NonEVItem = ["엔진오일", "미션오일"]

const listMap = {
  'gasoline': ["점화 플러그", ...NonEVItem, ...AllItem],
  'diesel': ["디젤 연료필터", "DPF 필터", "예열 플러그", ...NonEVItem, ...AllItem],
  'lpg': ["하이브리드 배터리 점검", ...NonEVItem, ...AllItem],
  'hybrid': ["하이브리드 배터리 점검", ...NonEVItem, ...AllItem],
  'ev': ["감속기 오일", ...AllItem],
}
const replacekmMap = {
  '엔진오일': ["10000"],
  '미션오일': ["100000"],
  '브레이크 패드': ["40000"],
  '브레이크 오일': ["40000"],
  '파워스티어링 오일': ["60000"],
  '에어컨 필터': ["15000"],
  '에어컨 가스': ["40000"],
  '냉각수': ["80000"],
  '타이어': ["60000"],
  '배터리': ["50000"],
  '점화 플러그': ["40000"],
  '디젤 연료필터': ["40000"],
  'DPF 필터': ["150000"],
  '예열 플러그': ["50000"],
  '하이브리드 배터리 점검': ["160000"],
  '감속기 오일': ["60000"]
}
const replacetimeMap = {
  '엔진오일': ["6"],
  '미션오일': ["120"],
  '브레이크 패드': ["24"],
  '브레이크 오일': ["24"],
  '파워스티어링 오일': ["36"],
  '에어컨 필터': ["12"],
  '에어컨 가스': ["24"],
  '냉각수': ["120"],
  '타이어': ["48"],
  '배터리': ["36"],
  '점화 플러그': ["48"],
  '디젤 연료필터': ["24"],
  'DPF 필터': ["96"],
  '예열 플러그': ["24"],
  '하이브리드 배터리 점검': ["96"],
  '감속기 오일': ["24"]
}
function Signaltext( signal ) {
  if (signal === "red") return "필요"
  if (signal === "yellow") return "임박"
  if (signal === "green") return "안정"
}
const checklistSlice = createSlice({
  name: "checklist",
  initialState: {
    list: [],
    R6list: [],
    R7list: [],
    nowtime: "25-04",
  },
  reducers: {
    setList: (state, action) => {
      const items = listMap[action.payload] || [];
      state.list = items.map(name => (
        { name, lastkm: null, lasttime: null, replacekm: replacekmMap[name], replacetime: replacetimeMap[name], remainkm: null, remaintime: null, signal: 'unknown' }));
      state.R6list = items.map(name => (
        { name, input1: 'null', input2: 'null', in1: false, in2: false, checked:false }));
      state.R7list = items.map(name => (
        { name, signal: null, signaltext: null, foreseekm: null, foreseetime: null }));
    },
    setInput: (state, action) => {
      const L = action.payload;
      L.forEach((data, index) => {
        if (state.list[index]) {
          state.list[index].lastkm = data.input1;
          state.list[index].lasttime = data.input2;
        }
      });
    },
    setOperation: (state, action) => {
      const { currentkm, caryear } = action.payload;
      state.list.forEach((item, index) => {
        if (item.lastkm === "null") {
          state.list[index].remainkm = parseInt(item.replacekm) - parseInt(currentkm);
        }
        else {
          state.list[index].remainkm = parseInt(item.lastkm) + parseInt(item.replacekm) - parseInt(currentkm);
        }

        if (item.lasttime === "null") {
          state.list[index].remaintime = parseInt(item.replacetime) - howlife(caryear, state.nowtime);
        }
        else {
          state.list[index].remaintime = parseMonth(item.lasttime) + parseInt(item.replacetime) - parseMonth(state.nowtime);
        }
        if (state.list[index].remainkm <= 0 || state.list[index].remaintime <= 0) {
          state.list[index].signal = 'red';
        }
        else if (state.list[index].remainkm <= state.list[index].replacekm * 0.2 || state.list[index].remaintime <= state.list[index].replacetime * 0.2) {
          state.list[index].signal = 'yellow';
        }
        else {
          state.list[index].signal = 'green';
        }
      })
    },
    setOutput: (state, action) => {
      const { currentkm } = action.payload;
      state.list.forEach((data, index) => {
        if (state.R7list[index]) {
          const tmpkm = parseInt(data.remainkm) + parseInt(currentkm);    
          const tmptime= plusmonth(data.remaintime, state.nowtime);

          state.R7list[index].signal = data.signal;
          state.R7list[index].signaltext = Signaltext(data.signal);
          state.R7list[index].foreseekm = (tmpkm < currentkm) ? "초과" : tmpkm;
          state.R7list[index].foreseetime = (tmptime < state.nowtime) ? "초과" : tmptime; 
       

        }
      }
      )

    }
  },
},
);
function parseMonth(str) {
  const [yearstr, monthstr] = str.split("-");
  return parseInt(yearstr, 10) * 12 + parseInt(monthstr, 10);
}
function howlife(year, now) {
  return parseMonth(now) - (parseInt(year, 10) - 2000) * 12
}
function toYear(totalMonths) {
  let year = Math.floor((totalMonths - 1) / 12);
  let month = (totalMonths - 1) % 12 + 1;
  const paddedMonth = String(month).padStart(2, "0");
  return `${String(year).padStart(2, "0")}-${paddedMonth}`;
}
function plusmonth(remain, now){
  return toYear(parseMonth(now) + remain);
 }



export const { setList, setInput, setOperation,setOutput,setChecked} = checklistSlice.actions;
export default checklistSlice.reducer;
