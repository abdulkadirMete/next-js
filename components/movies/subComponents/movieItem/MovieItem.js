import React from "react";
import styles from "./MovieItem.module.css";
import Link from "next/link";

export default function MovieItem({ id, title, poster_path }) {
  return (
    <Link href={`/film/${id}`}>
      <div className={styles.movieItem}>
        <img
          src={`https://www.themoviedb.org/t/p/w220_and_h330_face${poster_path}`}
          alt=""
          className={styles.movieImg}
        />
        <span className={styles.movieTitle}>{title}</span>
      </div>
    </Link>
  );
}
