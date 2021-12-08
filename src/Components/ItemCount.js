import { useState } from "react"
import Button from 'react-bootstrap/Button';
const Contador = () => {

    let init = 0
    const [contador, setContador] = useState(init)

    const aumentarContador = () => {
        setContador(contador+1)
    }

    const restarContador=()=>{
        setContador(contador-1)
    } 

    return (
        <div>
            <Button variant="primary" onClick={aumentarContador}>+</Button>
            <p> {contador} </p>
            <Button variant="danger" onClick={restarContador}>-</Button>
            <Button variant="dark"> Add to Cart</Button>
            
        </div>
    )
}

export default Contador
