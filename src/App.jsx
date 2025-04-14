import React, {useState} from 'react'
import TourList from "./Components/Gallery"

function App() {
  const [tours, setTours] = useState([])
  const removeTour = (id) => {
    setTours((prevTours) => prevTours.filter((tour) => tour.id !== id));
  };
  return (
    <main>
      <h1>Offered Tours</h1>
      <TourList tours={tours} setTours={setTours} onRemove={removeTour} />
    </main>
  )
}

export default App;
