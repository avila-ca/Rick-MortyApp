import { useEffect, useState } from "react"
import '../styles/fonts.css'
import { useNavigate } from "react-router-dom";

export const CharacterList = ({setId}:{setId: React.Dispatch<React.SetStateAction<number>>}) => {
      const [characters, setCharacters] = useState<Character[]>([]);
      const navigate = useNavigate();
      
      interface Character {
            id: number;
            name: string;
            status: string;
            image: string;
            species: string

      }

      useEffect(() => {
            fetch('https://rickandmortyapi.com/api/character/')
                  .then((response) => response.json())
                  .then((data) => setCharacters(data.results))
      }, [])

      const handleCard = (id: number) => {
            console.log(id)
            setId(id)
            navigate(`/character`);
      }

      return (
            <>
                  <header>
                        <h1 className="text-center my-4 fw-bold" style={{ textShadow: "3px 0 0 white", color: "rgb(193, 214, 167)" }}>Rick and Morty Characters</h1>

                  </header>
                  <div className="container-fluid">
                        <div className="row" >
                              {characters.map((character) => (
                                    <div className="col-md-4 mb-4 border rounded w-25 m-1 p-0 h-100" key={character.id} >
                                          <a style={{ cursor: "pointer" }} onClick={() => handleCard(character.id)}>
                                                <div className="card-body p-0" style={{ color: "rgb(134, 156, 152)", backgroundColor: "rgb(255, 227, 227)" }}>
                                                      <h3 className="shadow text-center bg-light rounded text-wrap p-2" style={{ height: "4em" }}>{character.name}</h3>
                                                      <p>Status: <em style={{ fontSize: "1.5em" }}>{character.status}</em></p>
                                                      <p>Species: <em style={{ fontSize: "1.5em" }}>{character.species}</em></p>
                                                      <img src={character.image} alt={character.name} width="100" />
                                                </div>
                                          </a>
                                    </div>

                              ))}

                        </div>
                  </div>

            </>
      )

}