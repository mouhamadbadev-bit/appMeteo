// 1. "function" en minuscule
function getWeatherIcon(code) {
  if (code === 0) return "☀️";

  if (code === 1) return "🌤️";
  if (code === 2) return "⛅";
  if (code === 3) return "☁️";

  if (code >= 45 && code <= 48) return "🌫️";
  if (code >= 51 && code <= 57) return "🌧️";
  if (code >= 61 && code <= 67) return "🌧️";
  if (code >= 71 && code <= 77) return "❄️";
  if (code >= 80 && code <= 82) return "🌦️";
  if (code >= 85 && code <= 86) return "🌨️";
  if (code >= 95 && code <= 99) return "⛈️";

  return "🌤️";
}

function DailyForecast({ daily }) {
  // Sécurité pendant le chargement des données
  if (!daily || !daily.time) {
    return null;
  }

  return ( <>
    <h3 className="text-cyan-400 text-4xl text-center  m-7">Daily forecast</h3>
    <section className="ml-2.5 justify-center flex ">
  

      <div className="flex gap-x-3.5 ">
        {daily.time.map((time, index) => {
          // Transformer la date en jour court (ex: Mon, Tue)
          const dayName = new Date(time).toLocaleDateString("en-US", {
            weekday: "short",
            timeZone: "UTC",
          });

          // Températures arrondies avec sécurité ?.
          const maxTemp = Math.round(daily.temperature_2m_max?.[index] ?? 0);
          const minTemp = Math.round(daily.temperature_2m_min?.[index] ?? 0);

          // Support des deux clés API possibles (weathercode ou weather_code)
          const weatherCode = daily.weathercode?.[index] ?? daily.weather_code?.[index];

          // Icône météo
          const weatherIcon = getWeatherIcon(weatherCode);

          return (
         
       <div key={time} className="" >
          

          <div className="text-amber-50 w-23 h-25 bg-gray-700 rounded-2xl pl-1.5 mb-4">
    {/* Jour */}
              <p className="flex justify-center p-1">{dayName}</p>

              {/* Icône météo */}
              <span className="flex justify-center p-1">{weatherIcon}</span>

              {/* Températures */}
              <div className="justify-between flex p-1">
                <strong>{maxTemp}°</strong>
                <span>{minTemp}°</span>
              </div>
          </div>


            </div>

         
          );
        })}
      </div>
    </section>
  </>);
}

export default DailyForecast;