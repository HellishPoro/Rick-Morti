interface EpisodeProps{
    name: string
    air_date: string
    episode: string
}

export const Episode = ({name,  air_date, episode}: EpisodeProps)=>{
    return (
        <>
                <h2>{name}</h2>
                <p>Release date: {air_date}</p>
                <p>Episode: {episode}</p>
                </>
    )
}