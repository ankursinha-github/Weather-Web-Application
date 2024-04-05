import './InfoBox.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function InfoBox({ weatherInfo }) {
    return (
        <div className="infoBox">
            <Card sx={{ width: 450 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="250"
                        image={ weatherInfo.humidity > 80 ? 
                            "https://images.unsplash.com/photo-1610741083757-1ae88e1a17f7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                            : 
                            weatherInfo.temp > 15 ? 
                            "https://images.unsplash.com/photo-1601134467661-3d775b999c8b?q=80&w=1375&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                            : 
                            "https://images.unsplash.com/photo-1486140525285-12e658d9ac0f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                        alt="weather image"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            { weatherInfo.city } { weatherInfo.humidity > 80 ? <ThunderstormIcon /> : weatherInfo.temp > 15 ? <WbSunnyIcon /> : <AcUnitIcon /> }
                        </Typography>
                        <Typography variant="body2" color="text.primary" component={"span"}>
                            <div>The weather can be described as <b><i>{ weatherInfo.weather }</i></b> and feels like { weatherInfo.feelsLike }</div>
                            <div>Tempreature : { weatherInfo.temp }</div>
                            <div>Humidity : { weatherInfo.humidity }</div>
                            <div>Min Tempreature : { weatherInfo.tempMin }</div>
                            <div>Max Tempreature : { weatherInfo.tempMax }</div>
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    );
}