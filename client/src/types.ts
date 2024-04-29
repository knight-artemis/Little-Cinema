type genType = {
    id: number,
    genre: string
}

type keywordsType = {
    id: string,
    keywords: string
}

export type filmType = {
    imdb_id: string,
    title: string,
    year: number,
    popularity: number,
    description: string,
    content_rating: string,
    movie_length: number,
    rating: number,
    created_at: string,
    trailer: string,
    image_url: string,
    release: string,
    plot: string,
    banner: string,
    type: string,
    more_like_this: {},
    gen: genType[],
    keywords: keywordsType[]
}

