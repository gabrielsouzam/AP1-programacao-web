const lista = [
  { a: 10, b: 3, c: 7 },
  { a: 5, b: -3, c: 9 },
  { a: 1, b: 9, c: 40 }
];

interface numbers {
  a: number
  b: number
  c: number
}

interface Questao01BProps {
  lista: {
    a: number
    b: number
    c: number
  }[];
}

//essa função retorna o maior elemento da objeto da lista recebida
function findMaxElement({ a, b, c }: numbers) {

  if(a > b && a > c) {
    return a;
  }

  if(b > c) {
    return b;
  }

  return c;
}

export const Questao01A = () => {
  return (
    <>
      <Questao01B lista={lista} />
    </>
  );
}

export function Questao01B({ lista }: Questao01BProps) {

  return (
    //essa função map percorre a lista de objetos e pega cada objeto da lista e retorna algo
    //nesse contexto, ela chama a função findMaxElement para pegar o maior elemento do objeto JSON
    <>
      {lista.map((objeto) => (
        <div>
          <strong>Maior elemento: </strong> 
          <span>{findMaxElement(objeto)}</span>
        </div>
      ))

      }
    </>
  );
};
