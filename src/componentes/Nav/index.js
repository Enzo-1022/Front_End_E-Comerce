function Lista(){
    return (
        <ul className="ulLinks">
            <li> <a href=""> Home </a> </li>
            <li> <a href=""> Sobre Nós </a> </li>
            <li> <a href=""> Categoria de Produtos </a> </li>
        </ul>
    )
}

export default function NavBar(){
    return (
        <nav>
            <Lista />
        </nav>
    )
}
