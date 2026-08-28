 function StatsGrid({ current }) {
  const stats = [
    {id: 1, label: 'Feels Like', value: `${Math.round(current.apparent_temperature)}°` },
    {id: 2, label: 'Humidity', value: `${current.relative_humidity_2m}%` },
    {id: 3, label: 'Wind', value: `${Math.round(current.wind_speed_10m)} km/h` },
    {id: 4, label: 'Precipitation', value: `${current.precipitation} mm` },
  ];

  return (
    <div className="text-amber-50   gap-x-10 flex mt-4 justify-center ">
      {stats.map((e) => (
        <div key={e.id} className=" bg-gray-600 w-25 h-15 p-2 rounded-2xl">
          <p className="">{e.label}</p>
          <p className="">{e.value}</p>
        </div>
      ))}
    </div>
  );
}

export default StatsGrid;