import { tmdb_paths } from "../../core/data/remote/Tmdb/DiccTmdbApi";

export const tmdbAdapter = (response) => {
    const {results} = response;

    return results.map((i) => ({
        id: i.id,
        title: i.title || i.name,
        poster: `${tmdb_paths.images.url}${tmdb_paths.images.sizes.original}${i.poster_path}`,
        backdrop: `${tmdb_paths.images.url}${tmdb_paths.images.sizes.original}${i.backdrop_path}`,
        description: i.overview,
        rating: i.vote_average,
        video: i.video,
    }))
}