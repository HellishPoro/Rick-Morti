interface LocationProps{
    name: string
    type: string
    dimension: string
}

export const Location = ({name, type, dimension}: LocationProps)=>{
    return(
        <>
                <h2>{name}</h2>
                <p>Type: {type}</p>
                <p>Deminsion: {dimension}</p>
                </>
    )
}