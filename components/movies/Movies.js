import React from "react";
import styles from "./Movies.module.css";
import MovieItem from "./subComponents/movieItem/MovieItem";

export default function Movies({ movies }) {
  return (
    <section className={styles.movies}>
      <div className={styles.container}>
        {movies.results.map((movie) => (
          <MovieItem key={movie.id} {...movie} />
        ))}
      </div>
    </section>
  );
}
