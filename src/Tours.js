import React from "react";
import Tour from "./Tour";
const Tours = ({ tours, removeTour }) => {
  return (
    <>
      <h2 className="title">Your tours</h2>
      <div className="underline"></div>
      <div>
        {tours.map((tour) => {
          return (
            <Tour key={tour.id} tour={tour} removeTour={removeTour}></Tour>
          );
        })}
      </div>
    </>
  );
};

export default Tours;
