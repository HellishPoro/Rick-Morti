export type CharactersTypes = { id: number; name: string; status: string; species: string; gender: string; image: string };
export type EpisodeTypes = { id: number; name: string; air_date: string; episode: string };
export type LocationTypes = { id: number; name: string; type: string; dimension: string };

export type Type = CharactersTypes | EpisodeTypes | LocationTypes;