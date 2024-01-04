import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Main";
import Myprofile from "./Myprofile";
import Qdetail from "./Qdetail";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/Myprofile" element={<Myprofile />} />
                    <Route path="/Qdetail" element={<Qdetail />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default App;
