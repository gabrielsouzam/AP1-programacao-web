import { useState } from "react"

export function Questao02() {

  //esse primeiro estado é para guardar a url da imagem do pokemon,tendo como valor inicial com o pokemon de frente
  const [pokemonUrl, setPokemonUrl] = useState("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png")
  
  //esse segundo estado guardar se o pokemon esta de frente, começando como true, pois começa de frente
  const [pokemonFront, setPokemonFront] = useState(true);

  //essa função altera a posição do pokemon, tanto de frente para trás como de trás para frente
  function handleChangePokemonPosition() {

    //se o pokemon estiver de frente, eu troco a url da imagem para trás e seto o estado de estar de frente como false
    if(pokemonFront) {
      setPokemonUrl("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png")
      setPokemonFront(false)
      
    //se o pokemon estiver de costa, eu troco a url da imagem para frente e seto o estado de estar de frente como true
    } else {
      setPokemonUrl("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png")
      setPokemonFront(true)
    }
  }

  //aqui eu tenho a imagem que exibe o que está na variavel de estado PokemonUrl e um botão que sempre que for acionado
  //vai chamar a função handleChangePokemonPosition
  return (
    <div className="flex items-center">
      <img src={pokemonUrl} alt="" />
      <button 
        onClick={handleChangePokemonPosition}
        className="bg-zinc-600 px-4 py-3 text-zinc-100 rounded flex items-center"
      >
        Trocar posição do pokemon
      </button>
    </div>
  )
}