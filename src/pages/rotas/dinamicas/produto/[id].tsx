import Pagina from "@/components/Pagina";
import { useRouter } from "next/router";

export default function PainaProdutoPorId() {
  const router = useRouter()

  return (
    <Pagina>
      <div>
        <p>Produto: {router.query.id}</p>
      </div>
    </Pagina>
  );
}