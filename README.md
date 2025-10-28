🌤️ Real-Time Weather App

A real-time weather application built with React.js and Tailwind CSS that fetches live weather data from WeatherAPI.com. The app shows the weather of your current location on load and allows you to search any city for weather information.

🔹 Features

Detects your current location automatically using the browser Geolocation API.

Search the weather for any city worldwide.

Displays temperature, weather condition, humidity, wind speed, and weather icon.

Responsive and visually appealing design using Tailwind CSS.

Compatible with HTTPS deployment platforms (e.g., Vercel).

🛠️ Technologies Used

React.js – Frontend framework.

Tailwind CSS – Styling.

WeatherAPI.com – API to fetch weather data.

Vercel – Deployment platform.

⚡ Installation

Clone the repository:

git clone https://github.com/yourusername/weather-app.git
cd weather-app


Install dependencies:

npm install


Add your WeatherAPI key:

Create a .env.local file in the root directory.

Add your key:

REACT_APP_WEATHER_API_KEY=your_api_key_here


Start the development server:

npm start

🌐 Deployment on Vercel

Push your code to GitHub.

Connect the repository to Vercel.

Add your API key as an environment variable in Vercel:

Key: REACT_APP_WEATHER_API_KEY

Value: your_api_key_here

Deploy the app. ✅

Important: Use https://api.weatherapi.com in fetch requests instead of http:// to avoid mixed content errors in production.

📦 Project Structure
weather-app/
├─ src/
│  ├─ App.js        # Main React component
│  ├─ index.js      # React DOM entry
│  └─ index.css     # Tailwind CSS imports
├─ public/
│  └─ assets/
│      └─ bg.jpg    # Background image
├─ .env.local       # Environment variables (not committed)
├─ package.json
└─ README.md

💻 Usage

On first load, allow the browser to access your location.

The app will show current weather automatically.

To check another city, type the name in the search box and click Search.

⚠️ Troubleshooting

Make sure your API key is correct and active.

Use HTTPS in fetch URLs (https://api.weatherapi.com/v1/...) to avoid mixed content errors on deployed sites.

Allow location access for automatic current location weather.

🌟 Future Improvements

Add a 5-day weather forecast.

Add unit toggle (Celsius / Fahrenheit).

Add background changes based on weather conditions.

📄 License

This project is open-source and free to use.
