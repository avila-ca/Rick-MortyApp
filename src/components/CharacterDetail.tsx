import { useEffect, useState } from "react";

export const CharacterDetail = ({ id }: { id: number }) => {
    const [person, setPerson] = useState<Character | null>(null)
    //const [episodes, setEpisodes] = useState (0)
    interface Character {
        id: number;
        name: string;
        status: string;
        species: string;
        type: string;
        gender: string;
        origin: {
          name: string;
          url: string;
        };
        location: {
          name: string;
          url: string;
        };
        image: string;
        episode: string[];
        url: string;
        created: string;
      }
      useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
                  .then((response) => response.json())
                  .then((data) => setPerson(data))
                  .catch((error) => console.error("Error fetching character", error))
                  console.log(person, id)
      },[id])

    if (!person) return <div>Loading...</div>;
      console.log(person)
    return (
        <>
        <header>
            <h1 className="text-center my-4 fw-bold" style={{ textShadow: "3px 0 0 white", color: "rgb(193, 214, 167)" }}>Character</h1>

        </header>
        <div className="container">
          <h1 className="my-4">{person.name}</h1>
          <div className="card p-3 bg-success">
            <img src={person.image} alt={person.name} className="img-fluid" />
            <p><strong>Status:</strong> {person.status}</p>
            <p><strong>Species:</strong> {person.species}</p>
            <p><strong>Gender:</strong> {person.gender}</p>
            <p><strong>Origin:</strong> {person.origin.name}</p>
            <p><strong>Episodes:</strong></p>
                    {
                    person.episode.map((episode, index) => (
                        <p key={index}>Episode: {episode}</p> 
                        
                    ))}
          </div>
        </div>
        </>
      );
}