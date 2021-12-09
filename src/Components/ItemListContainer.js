import { useState, useEffect } from "react";
import Contador from "./ItemCount";
import ItemList from "./ItemList";

const productosIniciales = [
    { id : 1, nombre : "Producto 1" },
    { id : 2, nombre : "Producto 2" },
    { id : 3, nombre : "Producto 3" },
    { id : 4, nombre : "Producto 4" }
]
const ItemListContainer = (parametros) => {
  const [mensaje, setMensaje] = useState("Estamos cargando todo para vos ... ");
  const [productos, setProductos] = useState([])
  useEffect(() => {
    const promesa = new Promise((res, rej) => {
      setTimeout(() => {
        if (Math.random() > 0.5) {
          res(productosIniciales);
        } else {
          rej();
        }
      }, 2000);
    });
    promesa
      .then(() => {
        setMensaje("Todo salio bien");
        setProductos()
      })
      .catch(() => {
        setMensaje("Todo salio mal");
      });

  }, []);

  return (
    <>
    <div>
      <h2 className="Greeting">{parametros.saludo}</h2>
      <p id="loading">{mensaje}</p>
      <ItemList producto={productos}/>
      <Contador />
    </div>
    </>
  );
};

export default ItemListContainer;
