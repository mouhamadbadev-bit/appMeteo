 function DailyForecast({ daily }) {
  // Sécurité si les données ne sont pas encore chargées
  if (!daily || !daily.time) return null;

  return (
    <section>
      <h3>Daily forecast</h3>
      <div>
        {daily.time.map((time, index) => {
          // 1. Transformation de la date (ex: "2026-08-19") en jour abrégé (ex: "Wed")
          const dayName = new Date(time).toLocaleDateString('en-US', { weekday: 'short' });
          
          // 2. Récupération des températures via l'index correspondant
          const maxTemp = Math.round(daily.temperature_2m_max[index]);
          const minTemp = Math.round(daily.temperature_2m_min[index]);

          return (
            <div key={time}>
              <p>{dayName}</p>
              <span>☀️</span>
              <div>
                <strong>{maxTemp}°</strong>
                <span>{minTemp}°</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default DailyForecast;