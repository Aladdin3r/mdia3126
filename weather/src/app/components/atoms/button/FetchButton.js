import { useState } from "react";

async function fetchWeather() {
    const API_URL = "https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=fnd&lang=en";
    const response = await fetch(API_URL);
    const data = await response.json();
}

const FetchButton = () => {
    return (
        <button className="bg-purple-400 p-3" onClick={fetchWeather}>
            Fetch 🌦️
        </button>
    )
}

export default FetchButton;