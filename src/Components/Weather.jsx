import './Weather.css'
import SearchBox from './SearchBox'
import InfoBox from './InfoBox'
import { useState } from 'react';

export default function Weather() {
    const [weatherInfo, setWeatherInfo] = useState( {
        city: "Delhi",
        temp: 25.05,
        tempMin: 25.05,
        tempMax: 25.05,
        humidity: 47,
        feelsLike: 24.84,
        weather: "haze"
    } );

    function updateWeatherInfo( newInfo ) {
        setWeatherInfo( newInfo );
    }

    return (
        <div className='weather'>
            <SearchBox updateWeatherInfo={ updateWeatherInfo } />
            <InfoBox weatherInfo={ weatherInfo } />
        </div>
    );
}