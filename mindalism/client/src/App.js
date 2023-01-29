// Importing modules
import React, { useState, useEffect } from "react";
import LandingPage from "./components/LandingPage";
import ErrorPage from "./components/ErrorPage";
import Navbar from "./components/Navbar";
import CalendarPage from "./components/Calendar";
import Analytics from "./components/Analytics";
import Journal from "./components/Journal";
import Emotion from "./components/Emotion";
import CalcAnalytics from "./components/calcAnalytics";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
  
function App() {
    return (
    <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path="/" exact element={<LandingPage />} />
            <Route path="/calendar" exact element={<CalendarPage/>} />
            <Route path="/journal" exact element={<Journal/>} />
            <Route path="/analytics" exact element={<Analytics/>} />
            <Route path="/emotion" exact element={<Emotion/>} />
            <Route path="/calcAnalytics" exact element={<CalcAnalytics/>} />
            <Route path="*" element={<ErrorPage />} />
        </Routes>
    </BrowserRouter>
    );
}
  
export default App;