import { useEffect, useState } from "react";

// essa função que simula uma requisição HTTP e retorna uma Promise
function getLocalCapitalAndPopulation() {
  return new Promise<CapitalAndPopulationProps[]>((resolve) => {
    setTimeout(() => {
      resolve([
        {"capital": ["Dublin"], "population": 4994724},
        {"capital": ["Nicosia"], "population": 1207361},
        {"capital": ["Madrid"], "population": 47351567}
      ]);
    }, 1000); // Simulando um atraso na resposta de 1 segundo
  });
}

// Tipagem de dados do tipo do array data
interface CapitalAndPopulationProps {
  capital: string[]
  population: number
}

// Essa função percorre o array do capitais e população e retorna a capital com maior população
function findCapitalsWithMostPopulation(capitalsAndPopulation: CapitalAndPopulationProps[]) {
  let capitalWithMostPopulation = capitalsAndPopulation[0];
  
  capitalsAndPopulation.forEach( (capital) => {
    if(capitalWithMostPopulation.population < capital.population) {
      capitalWithMostPopulation = capital
    }
  })

  return capitalWithMostPopulation ;
}

// Essa função percorre o array do capitais e população e retorna a capital com menor população
function findCapitalsWithMinorPopulation(capitalsAndPopulation: CapitalAndPopulationProps[]) {
  let capitalWithMinorPopulation = capitalsAndPopulation[0];
  
  capitalsAndPopulation.forEach( (capital) => {
    if(capitalWithMinorPopulation.population > capital.population) {
      capitalWithMinorPopulation = capital
    }
  })

  return capitalWithMinorPopulation ;
}

export function Questao04() {

  // Essa variável de estado guarda a capital com maior população
  const [capitalsWithMostPopulation, setCapitalsWithMostPopulation] = useState<CapitalAndPopulationProps>()

  
  // Essa variável de estado guarda a capital com menor população
  const [capitalsWithMinorPopulation, setCapitalsWithMinorPopulation] = useState<CapitalAndPopulationProps>()

  useEffect(
     () => {
      async function setCapitalsInformations() {

        //Essa variável guarda o array de objetos que é retorna na requisição
        const capitalsAndPopulation = await getLocalCapitalAndPopulation();

        //Essa variável guarda a capital com maior população
        const capitalWithMostPopulation = findCapitalsWithMostPopulation(capitalsAndPopulation);
        
        //Essa variável guarda a capital com menor população
        const capitalWithMinorPopulation = findCapitalsWithMinorPopulation(capitalsAndPopulation);
        
        // Aqui seto o estado guarda a cidade com maior população
        setCapitalsWithMostPopulation(capitalWithMostPopulation);
        
        // Aqui seto o estado guarda a cidade com menor população
        setCapitalsWithMinorPopulation(capitalWithMinorPopulation);
      }

      //chamada da função assíncrona que faz a requisição http e altera os valores das variáveis de estados
      setCapitalsInformations()
      
    }
  )

  //Aqui exibo os valores das variáveis de estados
  return (
    <>
      <strong>Maior população: {capitalsWithMostPopulation?.capital} - </strong>
      <span>{capitalsWithMostPopulation?.population}</span> <br />
      <strong>Menor população: {capitalsWithMinorPopulation?.capital} - </strong>
      <span>{capitalsWithMinorPopulation?.population}</span>
    </>
  )
}