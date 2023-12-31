
// import './App.css';
import UilReact from '@iconscout/react-unicons/icons/uil-react'
import TopButtons from './Components/TopButtons';
import Inputs from './Components/Inputs';
import TimeAndLocation from './Components/TimeAndLocation';
import TemperatureAndDetails from './Components/TemperatureAndDetails';
import Forecast from './Components/Forecast';
import getWeatherData from './Services/WeatherServices';

function App() {
  const fetchWeather = async () => {
    const data = await getWeatherData({q:"london"});
    console.log(data);
  }
  
  fetchWeather()
  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700
    h-fit shadow-xl shadow-gray-400">
    
<TopButtons/>
<Inputs/>
<TimeAndLocation/>
<TemperatureAndDetails/>
<Forecast title="hourly forecast"/>
<Forecast title="daily forecast"/>

    </div>
  );
}

export default App;
