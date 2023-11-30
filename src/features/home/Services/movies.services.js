import { Tmdb_URL_Base, tmdb_paths } from "../../../core/data/remote/Tmdb/DiccTmdbApi";
import { tmdbAdapter } from "../../adapters/Tmdb.adapter";

export const getPopularMovies = async () => {
    const {data} = await Tmdb_URL_Base.get(tmdb_paths.movies.popular);
    //debugger
    const adapted = tmdbAdapter(data);
    console.log('data Adaptada',adapted);
    return adapted;
};

export const getTopRatedMovies = async () => {
    const {data} = await Tmdb_URL_Base.get(tmdb_paths.movies.topRated);
    return tmdbAdapter(data);    
};

export const getUpcomingMovies = async () => {
    const {data} = await Tmdb_URL_Base.get(tmdb_paths.movies.upcoming);
    return tmdbAdapter(data);    
};
