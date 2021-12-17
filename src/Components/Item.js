import { Card } from "react-bootstrap";
import ItemCount from "./ItemCount";
const Item = ({ product }) => {

    const handleOnAdd = () => {
        console.log("Agregaste el producto al carrito")
    }
    return (
        <div className="ItemBox">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={product.imgURL} />
                <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text><p>Precio: {product.price}</p></Card.Text>
                    <ItemCount stock={product.stock} onAdd={handleOnAdd} initial={1} />
                </Card.Body>
            </Card>
        </div>
    )
}

export default Item
