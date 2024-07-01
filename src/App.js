import './App.css';
import {NavBar} from "./components/NavBar/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BannerSchoolInfo} from "./components/BannerSchoolInfo/BannerSchoolInfo";
import {QuestionSection} from "./components/QuestionSection/QuestionSection";
import React, {useRef} from "react";
import {QuestionPreviewText} from "./components/QuestionSection/QuestionPreviewText";
import {Answers} from "./components/QuestionSection/Answers";
import {TimeAndPrices} from "./components/TimeAndPricesSection/TimeAndPrices";
import {AboutUs} from "./components/AboutUs/AboutUs";
import Pictures from "./components/Pictures/Pictures";
import Footer from "./components/Footer/Footer";

function App() {
    const homeRef = useRef(null);
    const picturesRef = useRef(null);
    const pricesRef = useRef(null);
    const placeRef = useRef(null);

    return (
        <div className="App">
            <NavBar refs={{homeRef, picturesRef, pricesRef, placeRef}}/>
            <div ref={homeRef}><BannerSchoolInfo/></div>
            <QuestionSection/>
            <QuestionPreviewText/>
            <Answers/>
            <div ref={pricesRef}><TimeAndPrices/></div>
            <div ref={picturesRef}><Pictures/></div>
            <AboutUs/>
            <div ref={placeRef}><Footer/></div>
        </div>
    );
}

export default App;
