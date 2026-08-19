import { useState }  from 'react';
import  useWeather  from './hooks/useWeather';
import  SearchBar  from './components/SearchBar';
import  CurrentCard  from './components/CurrentCard';
import  StatsGrid  from './components/StatsGrid';
import  DailyForecast  from './components/DailyForecast';

export default function App() {
  const [city, setCity] = useState('Berlin');
  const { data, loading, error } = useWeather(city);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-6 md:p-12">
      <div className="max-w-5xl mx-auto">
        <header className="flex justify-between items-center">
          <h1 className="text-xl font-bold flex items-center gap-2">☀️ Weather Now</h1>
        </header>

        <SearchBar onSearch={setCity} />

        {loading && <p className="text-center py-10">Chargement des données...</p>}
        {error && <p className="text-center text-red-400 py-10">{error}</p>}

        {data && !loading && !error && (
          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <CurrentCard data={data} />
              <StatsGrid current={data.current} />
            </div>
          </div>
        )}
      </div>

      <div className="max-w-5xl mx-auto mt-6">
        {data && !loading && !error && <DailyForecast daily={data.daily} />}
      </div>
    </div>
  );
}   

    
