import { Link, Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <>
      <header>
        <Link to="/Gestor_de_Estoque/" className="logo">REACT STOCK</Link>
        <nav>
          <Link to="/Gestor_de_Estoque/">Início</Link>
          <Link to="/Gestor_de_Estoque/items">Items</Link>
        </nav>
      </header>
      <div>
        <Outlet />
      </div>
      <footer>
        Feito com React e React Router!
      </footer>
    </>
  )
}