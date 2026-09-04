 



 function StatsGrid({ current }) {
  const stats = [
    {id: 1, label: 'Feels Like', value: `${Math.round(current.apparent_temperature)}°` },
    {id: 2, label: 'Humidity', value: `${current.relative_humidity_2m}%` },
    {id: 3, label: 'Wind', value: `${Math.round(current.wind_speed_10m)} km/h` },
    {id: 4, label: 'Precipitation', value: `${current.precipitation} mm` },
  ];

  return (
    <div>
      <h1 className="text-cyan-400 text-4xl text-center mt-9 hover:scale-105 transition duration-300 antialiased justify-center">Weather Stats</h1>
<div >
    <div className="text-amber-50 m-x-auto m-y-auto  grid grid-cols-2 gap-y-3 gap-x-2 sm:justify-center items-center mt-5 ml-3.5 min-[375px]:ml-4 min-[390px]:pl-2 min-[412px]:pl-4 md:justify-center md:flex  min-[479px]:ml-7  min-[460px]:max-[510px]:ml-6  min-[510px]:max-[580px]:pl-14 min-[580px]:max-[610px]:pl-16 min-[610px]:max-[680px]:pl-20  min-[680px]:max-[710px]:pl-24 min-[710px]:max-[768px]:pl-28 ">
     
      {stats.map((e) => (
        <div key={e.id} className=" bg-gray-600 w-40 h-25 p-2 rounded-2xl  items-center flex flex-col hover:scale-105 transition duration-300 antialiased ">
          <p className="hover:text-cyan-400 font-bold text-2xl">{e.label}</p>
          <p className="mt-3 hover:text-cyan-400 text-2xl">{e.value}</p>
        </div>
      ))}
    </div>

</div>
    </div>
  );
}

export default StatsGrid;