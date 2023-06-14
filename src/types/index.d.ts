export interface Character {
    id: number,
    name: string,
    status: string,
    species: string,
    type: string,
    gender: string,
    image: string,
    location: Location,
    origin: Location
}

export interface Location {
    id: number,
    name: string,
    type: string,
    dimension: string,
    url: string
}

export interface Episode {
    id: number,
    name: string,
    air_date: string,
    episode: string,
    characters: Character[],
    url: string
}