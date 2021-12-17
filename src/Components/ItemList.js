import Item from "./Item";
const ItemList = ({products}) => {
    return (
        <div>
            <ul className="ListGroup">
                {products.map(product =><Item key={product.id} product={product}/>)}
            </ul>
        </div>
    )
}

export default ItemList
