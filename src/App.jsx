import{ useEffect, useState } from "react";

const API_KEY = "5b01bdad78e54f5193251420252810";

export default function WeatherApp() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch weather by city
  const fetchWeatherByCity = async (cityName) => {
    try {
      setLoading(true);
      const res = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${cityName}&aqi=no`
      );
      const data = await res.json();
      if (data.error) throw new Error(data.error.message);
      setWeather(data);
      setError("");
    } catch (err) {
      setError("City not found or API error.");
    } finally {
      setLoading(false);
    }
  };

  // Fetch weather by coordinates
  const fetchWeatherByCoords = async (lat, lon) => {
    try {
      setLoading(true);
      const res = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${lat},${lon}&aqi=no`
      );
      const data = await res.json();
      if (data.error) throw new Error(data.error.message);
      setWeather(data);
      setError("");
    } catch (err) {
      setError("Failed to get weather data.");
    } finally {
      setLoading(false);
    }
  };

  // Get current location
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const { latitude, longitude } = pos.coords;
          fetchWeatherByCoords(latitude, longitude);
        },
        () => {
          setError("Location permission denied. Please search manually.");
          setLoading(false);
        }
      );
    } else {
      setError("Geolocation not supported.");
      setLoading(false);
    }
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (city.trim()) {
      fetchWeatherByCity(city);
    }
  };

  return (
    <div className="">

    <div className="min-h-screen  bg-[url('./assets/bg.jpg')] bg-cover bg-center bg-no-repeat from-blue-500 to-indigo-700 text-white p-6 md:px-[100px]">
      <div className="md:flex justify-between items-center">
        <h1 className="text-[36px] font-bold mb-6 md:text-start text-center font-bebas tracking-[10px]">Weather</h1>

      <form onSubmit={handleSearch} className="flex gap-2 mb-6">
        <input
          type="text"
          placeholder="Search city..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="p-3 rounded-md text-[#fff] w-64 outline-none bg-white/20 backdrop-blur-[4px] "
        />
        <button
          type="submit"
          className="bg-white text-blue-600 px-4 py-2 rounded-md font-semibold hover:bg-gray-100 cursor-pointer"
        >
          Search
        </button>
      </form>
      </div>

      <div className="flex justify-center mt-[200px]">
        {loading && <p>Loading weather...</p>}
      {error && <p className="text-red-300">{error}</p>}

      {weather && !loading && (
        <div className="bg-white/20 backdrop-blur-[4px] p-6 w-[400px] rounded-2xl shadow-lg text-center max-w-sm">
          <h2 className="text-[42px] font-bold">{weather.location.name}</h2>
          <p className="text-[24px] mb-2">{weather.location.country}</p>
          <img
            src={weather.current.condition.icon}
            alt="Weather Icon"
            className="mx-auto w-20"
          />
          <p className="text-5xl font-bold">{weather.current.temp_c}°C</p>
          <p className="capitalize">{weather.current.condition.text}</p>
        </div>
      )}
      </div>
    </div>
    </div>
  );
}
