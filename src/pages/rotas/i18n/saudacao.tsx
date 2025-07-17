import Pagina from "@/components/Pagina";
import texto from "@/data/textos";
import { useRouter } from "next/router";

export default function PaginaSaucadao() {
  const router = useRouter()

  return (
    <Pagina>
      <div>{texto[router.locale ?? 'pt'].saudacao}</div>
    </Pagina>
  )
}