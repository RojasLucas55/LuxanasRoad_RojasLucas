import { useState } from "react"
import Button from 'react-bootstrap/Button';
const ItemCount = ({ stock, onAdd, initial }) => {

    const [count, setCount] = useState(1);

    const handleMinus = () => {
        if (count > initial) {
            setCount(count - 1)
        }
    }

    const handleAdd = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }

    return (
        <div id="contador-card">
                <Button variant="danger" onClick={handleMinus}> - </Button>
                <p> {count} </p>
                <Button variant="primary" onClick={handleAdd}> + </Button>

                <Button variant="dark" onClick={() => onAdd()} type="button"> Add to Cart</Button>

        </div>
    )
}

export default ItemCount
