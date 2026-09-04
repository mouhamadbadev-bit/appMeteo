import { useState }  from 'react';
import  useWeather  from './hooks/useWeather';
import  SearchBar  from './components/SearchBar';
import  CurrentCard  from './components/CurrentCard';
import  StatsGrid  from './components/StatsGrid';
import  DailyForecast  from './components/DailyForecast';
import style from './index.module.css';
import "./index.css";


export default function App() {
  const [city, setCity] = useState('Berlin');
  const { data, loading, error } = useWeather(city);

  return (
    <div >
      <div className="">
        <header className=''>
          <h1 className={`${style.chargement} text-7xl text-center flex antialiased mt-3 pr-6 text-cyan-300 sm:text-5xl sm:mt-4 sm:justify-center sm:flex`}>☀️ Weather Now</h1>
          <br />
          <br />
        
        
        </header>
        <div className="relative">
          <h1 className="antialiased justify-center-safe text-center text-4xl text-cyan-300 sm:text-3xl sm:mt-4 sm:justify-center mx-1.5">How's the sky looking  today?</h1>
          <br />
        </div>

        <SearchBar onSearch={setCity} />
         
       <div className="">

 {loading && <p className={`${style.m} justify-center text-cyan-300 text-5xl flex`}>Chargement des données...</p>}
        {error && <p className="text-cyan-300 text-center text-6xl ">{error}</p>}

        {data && !loading && !error && (
          
           <div>
            <div className=""> <CurrentCard data={data} /> </div>
            
            <div className=" "> 
              <StatsGrid  current={data.current} /> </div>
           </div> 
             
        
        )}
      </div>

    <div>
  {data && !loading && !error && (
    <DailyForecast daily={data?.daily} unit={data?.unit} />
  )}
</div>

       </div>





    </div>


    
  );
}   

    
