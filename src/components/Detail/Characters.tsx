interface CharactersProps{
    name: string
    status: string
    species: string
    gender: string
    image: string
}

export const Characters = ({name, status, species, gender, image}: CharactersProps) =>{
    return (
        <>
            <h2>{name}</h2>
            <img src={image}></img>
            <p>Status: {status}</p>
            <p>Species: {species}</p>
            <p>Gender: {gender}</p>
        </>
    )
}