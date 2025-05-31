import { useParams } from 'react-router-dom'
import { Episode } from './components/Episode';
import { Location } from './components/Location';
import { Characters } from './components/Characters';
import type { CharactersTypes, EpisodeTypes, LocationTypes } from '../../types/types';
import { RESOURCE_MAP } from '../../constants/ResourceMap';
import { useSingleItem } from '../../utils/useSingleItem';

export const Detail = () => {
    const { category, id } = useParams<{category: string, id: string}>()
    const resourceType = RESOURCE_MAP[category as string];

    const {data, loading, error} = useSingleItem(resourceType as string, id as string);


    if(loading) return <span>Loading...</span>
    if(error) return <span>Error</span>  

    if(!resourceType){
        return <span>This page does not exist</span>
    }

    if(category === 'characters'){
        const character = data as unknown as CharactersTypes
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
        const episodes = data as unknown as EpisodeTypes
        return(
            <Episode 
                name={episodes.name}
                air_date={episodes.air_date}
                episode={episodes.episode}
            />
        )
    }

    if(category === 'location'){
        const locations = data as unknown as LocationTypes
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