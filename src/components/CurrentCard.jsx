  function CurrentCard({ data }) {
  return (
    <div className="bg-gradient-to from-blue-600 to-indigo-600 p-6 rounded-2xl text-white shadow-lg">
      <h2 className="text-2xl font-bold">{data.name}, {data.country}</h2>
      <p className="text-sm opacity-80">{new Date().toLocaleDateString()}</p>
      <div className="flex justify-between items-center mt-6">
        <span className="text-6xl font-bold">{Math.round(data.current.temperature_2m)}°</span>
      </div>
    </div>
  );
}
export default CurrentCard;