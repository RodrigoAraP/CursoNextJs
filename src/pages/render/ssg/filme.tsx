import Filme from "@/components/Filme";
import Pagina from "@/components/Pagina";
import filmes from "@/data/filmes";

export async function getStaticProps(){
  return {
    props: {
      filme: filmes[100],
      data: new Date().toLocaleTimeString('pt-BR')
    }
  }
}

export default function PaginaFilme(props: any) {
  return (
    <Pagina>
      <h1 className="text-4xl">Pagina Filme</h1>
      <h1 className="text-2xl">Hora de geracao: {props.data}</h1>
      <Filme
        id={props.filme.id}
        titulo={props.filme.titulo}
        subtitulo={props.filme.subtitulo}
        descricao={props.filme.descricao}
        imagem={props.filme.imagem} />
    </Pagina>
  )
}