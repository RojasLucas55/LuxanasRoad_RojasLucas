import NavBar from "./NavBar"

const Header = ( parametros) => {

    console.log(parametros)

    return (
        <header id= "main-header">
            <h1>Luxana's Road</h1>
            <h2>{parametros.saludo}</h2>
            <NavBar/>
        </header>
    )
}

export default Header