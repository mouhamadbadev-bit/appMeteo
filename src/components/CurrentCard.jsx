  function CurrentCard({ data }) {
  return (
<div className="flex justify-center mt-9 hover:scale-105 transition duration-300   "> 
    <div className="flex bg-sky-400 w-3xl h-60 items-center justify-between p-3 rounded-2xl text-amber-50 mx-2.5 ">

     <div>
       <h2 className="text-xl font-bold hover:scale-105 transition duration-300 md:text-3xl">{data.name}, {data.country}</h2>
       
      <p className="mt-2 text-sm font-semibold hover:scale-105 transition duration-300 md:text-3xl">
         <span> {new Date().toLocaleDateString(['fr-FR','en-US'], {weekday : 'long',day: 'numeric', month:'long', year:'numeric'})} </span> 
      </p>
     </div>
     
      <div className="hover:scale-105 transition duration-300">
        <span className="text-5xl font-bold ml-8 ">☀️     {Math.round(data.current.temperature_2m)}°</span>
      </div>
    </div>

</div>
  );
}
export default CurrentCard;