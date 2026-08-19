export default function StatsGrid({ current }) {
  const stats = [
    { label: 'Feels Like', value: `${Math.round(current.apparent_temperature)}°` },
    { label: 'Humidity', value: `${current.relative_humidity_2m}%` },
    { label: 'Wind', value: `${Math.round(current.wind_speed_10m)} km/h` },
    { label: 'Precipitation', value: `${current.precipitation} mm` },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-6">
      {stats.map((item, index) => (
        <div key={index} className="bg-slate-800 p-4 rounded-xl text-white">
          <p className="text-xs text-slate-400">{item.label}</p>
          <p className="text-xl font-semibold mt-1">{item.value}</p>
        </div>
      ))}
    </div>
  );
}