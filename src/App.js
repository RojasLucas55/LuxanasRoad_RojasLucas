import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Main from "./Components/Main";
import ItemListContainer from "./Components/ItemListContainer";
import CartWidget from "./Components/CartWidget";
const App = () => {
    return (
        <>
            <Header id= "componente-header"/>
            <CartWidget/>
            <ItemListContainer saludo=" Welcome To Luxana's Road "/>
            <Main/>
            <Footer/>
        </>
    )
}

export default App;