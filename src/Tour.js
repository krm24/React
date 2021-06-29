import React, { useState } from "react";

const Tour = ({ key, tour, removeTour }) => {
  const [readMore, setReadMore] = useState(false);
  const { id, name, info, image, price } = tour;
  return (
    <>
      <section className="single-tour">
        <img src={image} alt="Couldnt fetch " className="single-tour img"></img>
        <footer>
          <div className="tour-info">
            <h4>{name}</h4>
            <h4 className="tour-price">${price}</h4>
          </div>
          <p>
            {readMore ? info : `${info.substring(0, 200)}...`}
            <button onClick={() => setReadMore(!readMore)}>
              {readMore ? "show less" : "  read more"}
            </button>
          </p>
          <button className="delete-btn" onClick={() => removeTour(id)}>
            not interested
          </button>
        </footer>
      </section>
    </>
  );
};

export default Tour;
