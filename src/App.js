import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

const url = "https://course-api.com/react-tours-project";
function App() {
  const [tours, setTours] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };
  const getTours = async () => {
    setIsLoading(true);
    const response = await fetch(url);
    const tours = await response.json();
    setTours(tours);
    setIsLoading(false);
  };
  useEffect(() => {
    getTours();
  }, []);
  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    );
  } else {
    if (tours.length === 0) {
      return (
        <main>
          <section className="title">
            <h2>No trips to display</h2>
            <button
              className="btn"
              onClick={() => {
                getTours();
              }}
            >
              Refresh
            </button>{" "}
          </section>
        </main>
      );
    } else {
      return (
        <main>
          <Tours tours={tours} removeTour={removeTour}></Tours>;
        </main>
      );
    }
  }
}

export default App;
