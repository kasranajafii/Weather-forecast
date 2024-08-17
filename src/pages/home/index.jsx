import React, { useState } from "react";
import AnimatedView from "./components/animatedView";
import "./home.scss";

const Home = () => {
    const [cityInfo, setCityInfo] = useState({});
    const [weatherInfo, setWeatherInfo] = useState({});
    const [unit, setUnit] = useState("imperial");
    return (
        <div className="home">
            <AnimatedView />
            <Status cityInfo={cityInfo} weatherInfo={weatherInfo} unit={unit} />
        </div>
    );
};

export default Home;
