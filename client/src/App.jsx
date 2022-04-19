import React from "react";
import {Route, Routes} from "react-router-dom";
import Login from './Components/Login/Login';
import Register from './Components/Login/Register';
import SeatingLayout from "./Components/Shows/Seating/SeatingLayout";

function App() {
    
    return ( 
        <div className = "App" >
            <Routes>
                <Route path="/login" element={<Login />}/>
                <Route path="/register" element={<Register />}/>
                <Route path="/seating" element={<SeatingLayout hallId={1}/>}/>
            </Routes>
        </div>
    );
}

export default App;