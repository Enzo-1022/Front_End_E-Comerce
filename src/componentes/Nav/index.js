import iconLogin from './icons8-login-arredondado-à-direita-50.png'

function Lista(){
    return (
        <ul className="ulLinks">
            <li> <a href=""> Home </a> </li>
            <li> <a href=""> Sobre Nós </a> </li>
            <li> <a href=""> Categoria de Produtos </a> </li>
            <li> <a href=""> <img alt="" src={iconLogin}/> </a> </li>
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
