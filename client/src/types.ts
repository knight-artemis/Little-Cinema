type ratingType = {
    kp: number,
    imdb: number,
    filmCritics: number,
    russianFilmCritics: number,
    await: null
}

export type filmType = {
    name: string,
    rating: ratingType,
    description: string,
    premiere: { world: string },
    year: number,
    poster: { url: string, previewUrl: string },
    genres: { name: string }[],
    movieLength: number
}

