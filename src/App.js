import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Main from "./Components/Main";
import ItemListContainer from "./Components/ItemListContainer";
const App = () => {
    return (
        <>
            <Header id= "componente-header"/>
            <ItemListContainer saludo=" Welcome To Luxana's Road "/>
            <Main/>
            <Footer/>
        </>
    )
}

export default App;