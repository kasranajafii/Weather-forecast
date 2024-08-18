import React, { useState } from "react";
import AnimatedView from "./components/animatedView";
import "./home.scss";
import SideBar from "../../components/sideBar";
import DotsMenu from "../../components/dotsMenu";

const Home = () => {
    const [cityInfo, setCityInfo] = useState({});
    const [weatherInfo, setWeatherInfo] = useState({});
    const [searchTerm, setSearchTerm] = useState("New York");
    const [sideBarStatus, setSideBarStatus] = useState(false);
    const [unit, setUnit] = useState("imperial");
    return (
        <div className="home">
            <SideBar
                isOpen={sideBarStatus}
                onClose={() => setSideBarStatus(false)}
                onInput={(e) => setSearchTerm(e.target.value)}
                searchTerm={searchTerm}
                onUnit={(e) => setUnit(e.target.value)}
                unit={unit}
            />
            <AnimatedView />
            <DotsMenu onClick={() => setSideBarStatus(true)} />
            <Status cityInfo={cityInfo} weatherInfo={weatherInfo} unit={unit} />
        </div>
    );
};

export default Home;
