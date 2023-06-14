export interface Character {
    id: number,
    name: string,
    status: string,
    species: string,
    type: string,
    gender: string,
    image: string,
    location: Location
}

export interface Location {
    id: number,
    name: string,
    type: string,
    dimension: string
}