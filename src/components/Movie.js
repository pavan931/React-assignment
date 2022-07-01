import React from "react";

const Movie = (props) => {
    return (
        <div className="movie">
            <img src="./image.jpg" alt={props.title} className="movie__img" />
            <span className="movie__title">{props.title}</span>
        </div>
    );
};

export default Movie;
