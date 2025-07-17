import Pagina from "@/components/Pagina";

export async function getStaticProps() {
  const resposta = await fetch('https://api.chucknorris.io/jokes/random')
  const dados = await resposta.json()
  return { props: {dados} }
}

export default function PaginaChuckNorris(props: any) {
  return (
    <Pagina>
      <div>{props.dados.value}</div>
    </Pagina>
  )
}