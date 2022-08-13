import React, { useState, useEffect,useContext } from 'react';
import Loading from './Loading';
import Tours from './Tours';

const url = 'https://course-api.com/react-tours-project';
export const tourContext =React.createContext()
function App() {

  
  const [loading, setLoading] = useState(true);
  const [tour, setTour] = useState([]);
    const removeTour = (id) => {
      const newTour = tour.filter((tour)=>tour.id !== id)
      setTour(newTour)
    };
  const fetchTours = async () => {
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTour(tours);
      console.table(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    fetchTours();
  }, []);
  if (loading) {
    return <Loading />;
  }
  if(tour.length===0){
   return (
     <main>
       <div className='title'>
         <h2>No tours left</h2>
         <button className='btn' onClick={()=>{fetchTours()}}>Refresh</button>
       </div>
     </main>
   );
  }
  return (
    <tourContext.Provider value={removeTour}>
    <main>
      <Tours tour={tour} />
    </main>
    </tourContext.Provider>
  );
}

export default App;
