import React from "react";
import Header from"./Header.jsx";
import Banner from "./Banner.jsx";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from "./signup.jsx";
import Loginsite from "./login.jsx";
import "./App.css";
function App() {
               
    return(
        <>
        <Header/>
        <Banner/>
        <Router>
            <Routes>
                <Route path="/" element={<Signup/>}/>
                <Route path="/login" element={<Loginsite/>}/>

            </Routes>
        </Router>
        </>

    );
}

export default App
