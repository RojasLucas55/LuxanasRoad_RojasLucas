import CartWidget from "./CartWidget"
import NavBar from "./NavBar"

const Header = () => {

    return (
        <header id= "main-header">
            <h1>Luxana's Road</h1>
            <NavBar/>
            <CartWidget/>
        </header>
    )
}

export default Header