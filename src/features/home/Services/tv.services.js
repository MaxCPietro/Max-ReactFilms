import { Tmdb_URL_Base, tmdb_paths } from "../../../core/data/remote/Tmdb/DiccTmdbApi";
import { tmdbAdapter } from "../../adapters/Tmdb.adapter";

export const getPopularTvShows = async () => {
    const {data} = await Tmdb_URL_Base.get(tmdb_paths.tv.popular);
    //debugger
    const adapted = tmdbAdapter(data);
    console.log('data Adaptada TV',adapted);
    return adapted;
};

export const getTopRateTvShows = async () => {
    const {data} = await Tmdb_URL_Base.get(tmdb_paths.tv.topRated);
    return tmdbAdapter(data);    
};