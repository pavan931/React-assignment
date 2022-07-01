import "./index.css";
import Movie from "./components/Movie";

const movies = [
    "The Avengers",
    "Avengers United They Stand",
    "Avenger Endgame",
    "Avenger Infinity war",
    "Avengers Age of Ultron",
    "Avengers Assemble",
    "The Avengers Earth's Mightiest Heroes",
    "The Avengers",
    "Avengers",
];

function App() {
    return (
        <div className="movies">
            {movies.map((movie, index) => (
                <Movie key={index} title={movie} />
            ))}
        </div>
    );
}

export default App;
