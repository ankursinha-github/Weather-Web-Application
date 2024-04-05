import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

export default function SearchBox({ updateWeatherInfo }) {
    const [city, setCity] = useState("");
    const [error, setError] = useState(false);

    let API_URL = "https://api.openweathermap.org/data/2.5/weather?";
    let API_KEY = "f3f9467655ee9db99910065c3493fbc9";

    function handleInputChange(event) {
        setCity(event.target.value);
    }

    async function handleDataSubmit(event) {
        try {
            event.preventDefault();
            let newInfo = await getWeatherData();
            updateWeatherInfo(newInfo);
            setCity("");
            setError(false);
        } catch (err) {
            setError(true);
        }
    }

    const getWeatherData = async () => {
        try {
            let response = await fetch(`${API_URL}q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();
            let result = {
                city: city,
                temp: jsonResponse.main.temp,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like,
                tempMin: jsonResponse.main.temp_max,
                tempMax: jsonResponse.main.temp_min,
                weather: jsonResponse.weather[0].description
            }

            return result;
        } catch(err) {
            throw err;
        }
    }

    return (
        <div className="searchBox">
            <form onSubmit={handleDataSubmit}>
                <TextField label="City Name" variant="outlined" autoComplete='off' onChange={handleInputChange} value={city} />
                <br /><br />
                <Button variant="contained" onClick={handleDataSubmit}>Search</Button>
                <br /><br />
                {error && <p style={{color: "red", fontWeight: 'bold'}}>city does not exists in our API</p>};
            </form>
        </div>
    );
}