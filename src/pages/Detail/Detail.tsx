import { useParams } from 'react-router-dom'
import { Episode } from './components/Episode';
import { Location } from './components/Location';
import { Characters } from './components/Characters';
import { DATASETS } from '../../constants/datasets';
import type { CharactersTypes, EpisodeTypes, LocationTypes, Type } from '../../types/types';

export const Detail = () => {
    const { category, id } = useParams<{category: string, id: string}>()
    const data = (DATASETS as Record<'characters' | 'episode' | 'location', Type[]>)[category as keyof typeof DATASETS]

    if(!data){
        return <span>This page does not exist</span>
    }

    const transformedId = Number(id)

    const item = data.find((el: Type)=> el.id === transformedId)

    if(category === 'characters'){
        const character = item as CharactersTypes
        return(
            <Characters
                name={character.name}
                status={character.status}
                species={character.species}
                gender={character.gender}
                image={character.image}
            />
        )
    }

    if(category === 'episode'){
        const episodes = item as EpisodeTypes
        return(
            <Episode 
                name={episodes.name}
                air_date={episodes.air_date}
                episode={episodes.episode}
            />
        )
    }

    if(category === 'location'){
        const locations = item as LocationTypes
        return(
            <Location
                name={locations.name}
                type={locations.type}
                dimension={locations.dimension}
            />
        )
    }
    return <span>Page with such ID does not exist.</span>
}