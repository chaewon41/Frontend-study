/*import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import "./Movie.module.css";

function Movie({id,coverImg, title, summary, genres}) {
    return (
        <div className="movie-card">
            <img src={coverImg} />
            <h2> 
                <Link to= {`/movie/${id}`}>{title} </Link>
            </h2>
            <p>{summary.length > 235 ? `${summary.slice(0,235)}...` : summary}</p>
            <ul>
                {genres.map( (g)=>(
                <li key={g}>{g}</li>
                ))}
            </ul>
        </div>
)}

Movie.propTypes = {
    id:PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}
export default Movie; */
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({ id, coverImg, title, summary, genres }) {
  return (
    <div className={styles.movieCard}>
      <img src={coverImg} alt={title} className={styles.movieImg} />
      <h2 className={styles.movieTitle}>
        <Link to={`/movie/${id}`} className={styles.movieLink}>{title}</Link>
      </h2>
      <p className={styles.movieSummary}>
        {summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}
      </p>
      <ul className={styles.movieGenres}>
        {genres.map((g) => (
          <li key={g} className={styles.movieGenreItem}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;

