  function CurrentCard({ data }) {
  return (
<div className="flex justify-center">
    <div className="flex bg-sky-400 w-3xl h-60 items-center justify-between p-3 rounded-2xl text-amber-50 ">

     <div>
       <h2 className="">{data.name}, {data.country}</h2>
       
      <p className="">
         <span> {new Date().toLocaleDateString(['en-US', 'fr-FR'], {weekday : 'long', month:'long', year:'numeric'})} </span> 
      </p>
     </div>
     
      <div className="">
        <span className="text-6xl font-bold">☀️     {Math.round(data.current.temperature_2m)}°</span>
      </div>
    </div>

</div>
  );
}
export default CurrentCard;