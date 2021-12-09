import { useState, useEffect } from "react";
import Contador from "./ItemCount";
const ItemListContainer = (parametros) => {
  const [mensaje, setMensaje] = useState("Estamos cargando todo para vos ... ");

  useEffect(() => {
    const promesa = new Promise((res, rej) => {
      setTimeout(() => {
        if (Math.random() > 0.5) {
          res();
        } else {
          rej();
        }
      }, 2000);
    });
    promesa
      .then(() => {
        setMensaje("Todo salio bien");
      })
      .catch(() => {
        setMensaje("Todo salio mal");
      });

  }, []);

  return (
    <div>
      <h2 className="Greeting">{parametros.saludo}</h2>
      <p id="loading">{mensaje}</p>
      <Contador />
    </div>
  );
};

export default ItemListContainer;
