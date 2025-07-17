import Menu from "./Menu";

interface PaginaProps {
  children?: any;
}

export default function Pagina(props: PaginaProps) {
  return (
    <div className="
  flex flex-col min-h-screen
  bg-gradient-to-r from-zinc-900 to-black
  text-5xl
  ">
      <nav className="
        bg-black p-1
        border-b border-zinc-700
      ">
        <Menu />
      </nav>
      <main className="
        flex flex-1 flex-col items-center justify-center min-h-screen

    ">
        {props.children}
      </main>
    </div>
  )
}