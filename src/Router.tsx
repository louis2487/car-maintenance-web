//TopBar tyscript update 0512
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TopBar from './TopBar';
import R1 from './R1';
import R2H from './R2H';
import R2Hon from './R2Hon';
import R2K from './R2K';
import R2G from './R2G';
import R2Re from './R2Re';
import R2T from './R2T';
import R2N from './R2N';
import R2L from './R2L';
import R2B from './R2B';
import R2A from './R2A';
import R2Ben from './R2Ben';
import R2C from './R2C';
import R2F from './R2F';
import R2V from './R2V';
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
                <Route path="/Kia" element={<R2K/>} />
                <Route path="/Genesis" element={<R2G/>} />
                <Route path="/Re" element= {<R2Re/>} />
                <Route path="/Toyota" element={<R2T/>} />
                <Route path="/Honda" element={<R2Hon />} />
                <Route path="/Nissan" element={<R2N />} />
                <Route path="/Lexus" element={<R2L />} />
                <Route path="/BMW" element={<R2B />} />
                <Route path="/Audi" element={<R2A />} />
                <Route path="/Benz" element={<R2Ben />} />
                <Route path="/Chevrolet" element={<R2C />} />
                <Route path="/Ford" element={<R2F />} />
                <Route path="/Volkswagen" element={<R2V />} />
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