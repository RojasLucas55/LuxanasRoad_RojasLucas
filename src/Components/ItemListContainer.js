import Contador from "./ItemCount" 
export const ItemListContainer = (parametros) => {
    return (
        <div>
            <h2 className="Greeting">{parametros.saludo}</h2>
            <Contador/>
        </div>
    )
}

export default ItemListContainer