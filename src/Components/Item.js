import { Card } from "react-bootstrap";
import Contador from "./ItemCount";
const Item = ({ product }) => {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={product.imgURL} />
                <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>{product.price}</Card.Text>
                    <Contador/>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Item
