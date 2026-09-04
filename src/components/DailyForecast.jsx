// 1. Détermination des icônes selon le code WMO
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

  return (
    <>
      <h3 className="text-cyan-400 text-4xl text-center m-7 hover:scale-105 transition duration-300">Daily forecast</h3>

      <section className=" justify-center ml-1.5 min-[375px]:ml-4.5 min-[414px]:ml-6.5  min-[412px]:ml-8   min-[360px]:ml-3.5  min-[768px]:ml-1  min-[479px]:ml-9 ">
        <div className=" gap-x-3 grid grid-cols-3 md:flex md:justify-center md:m-1.5 md:gap-y-1  ">
          {daily.time.map((time, index) => {
            // Détection automatique de la langue de l'utilisateur
            const langue = navigator.language || "fr-FR";
            
            const dayName = new Date(time).toLocaleDateString(langue, {
              weekday: "short",
              timeZone: "UTC",
            });

            // Arrondi des températures
            const maxTemp = Math.round(daily.temperature_2m_max?.[index] ?? 0);
            const minTemp = Math.round(daily.temperature_2m_min?.[index] ?? 0);

            // Gestion du code météo
            const weatherCode = daily.weathercode?.[index] ?? daily.weather_code?.[index];
            const weatherIcon = getWeatherIcon(weatherCode);

            return (
              <div key={time}>
                <div className="text-amber-50 w-24 bg-gray-700 rounded-2xl p-2 mb-4 hover:scale-105 transition duration-300">
                  {/* Jour avec première lettre en majuscule */}
                  <p className="flex justify-center capitalize text-sm font-semibold hover:text-cyan-400 ">
                    {dayName}
                  </p>

                  {/* Icône météo */}
                  <span className="flex justify-center my-1 text-xl hover:scale-125 transition duration-300">
                    {weatherIcon}
                  </span>

                  {/* Températures Max / Min */}
                  <div className="flex justify-between items-center text-sm mt-1 px-1 ">
                    <strong className="hover:text-cyan-400">{maxTemp}°</strong>
                    <span className="text-gray-300 hover:text-cyan-400">{minTemp}°</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default DailyForecast;