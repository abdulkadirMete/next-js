import Layout from "../components/Layout";
import Movies from "../components/movies/Movies";

function HomePage({ movies }) {
  return (
    <Layout>
      <Movies movies={movies} />
    </Layout>
  );
}

export async function getServerSideProps() {
  const res = await fetch(
    "https://api.themoviedb.org/3/movie/popular?api_key=b810a350d227308f3fc8a0cabe9e18d2&language=en-US&page=1"
  );
  const movies = await res.json();

  return {
    props: {
      movies,
    },
  };
}

export default HomePage;
