import Home from "@/src/module/Home";
import { getPopular } from "@/src/core/serverFecth/getPopular";
import { IMovie, ISeries } from "../core/helper/interface";

export default async function HomeScree() {
  const { results: movies } = await getPopular<IMovie>({ type: "movie" });
  const { results: tvSeries } = await getPopular<ISeries>({ type: "tv" });
  return (
    <main className="container h-full mx-auto">
      <Home moviesArr={movies} seriesArr={tvSeries} />
    </main>
  );
}
