import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TopBar from './TopBar';
import R1 from './R1';
import R2H from './R2H';
import R2G from './R2G';
import R3 from './R3';
import R4 from './R4';
import R5 from './R5';
import R6 from './R6';
import R7 from './R7';


function Router() {
    return (
        <BrowserRouter>
            <TopBar />
            <Routes>
                <Route path="/" element={<R1 />} />
                <Route path="/Hyundai" element={<R2H />} />
                <Route path="/Kia" element={<R2G/>} />
                <Route path="/fuel" element={<R3/>} />
                <Route path="/year" element={<R4/>} />
                <Route path="/mileage" element={<R5/>} />
                <Route path="/checklist" element={<R6/>} />
                <Route path="/result" element={<R7/>} />
            </Routes>
        </BrowserRouter>

    );
};
export default Router;