import { Tmdb_URL_Base, tmdb_paths } from "../../../core/data/remote/Tmdb/DiccTmdbApi";

export const getPopularMovies = async () => {
    const {data} = await Tmdb_URL_Base.get(tmdb_paths.movies.popular);
    //debugger
    console.log('data',data);
    return data;
};
