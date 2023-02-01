import React from 'react';
import ReactDOM from 'react-dom/client';
import CountDown from './Components/Counter/Counter';
import Preloader from './Components/PreLoader/Preloader';
import Content from "./Components/Content/Content"
import { Language } from "./lang/lang.js"
import { initReactI18next } from "react-i18next";
import i18n from "i18next";
import "./App.css"

i18n.use(initReactI18next).init({
    resources: Language,
    lng: localStorage.getItem("language")
        ? localStorage.getItem("language")
        : "uz",
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div className="App">
        <div className="container">
            <Content />
            <CountDown />
            <Preloader />
        </div>
    </div>
);
