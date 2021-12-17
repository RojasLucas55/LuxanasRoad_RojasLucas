import Contador from "./ItemCount";
import ItemList from "./ItemList";

const ItemListContainer = (parametros) => {

  const products = [
    {
        id: 1,
        name: "Remera Batman",
        price: 1300,
        stock: 10,
        imgURL: "IMG/img/batmannegra.jpg",
        category: "Remeras"
    },
    {
        id: 2,
        name: "Taza Harry Potter",
        price: 550,
        stock:5,
        imgURL: "IMG/img/tazaHP.jpg",
        category:"Tazas"
    },
    {
        id: 3,
        name: "Funda Harry Potter",
        price: 650,
        stock:10,
        imgURL: "IMG/img/fundaHP.jpg",
        category: "Fundas"
    },
    {
        id: 4,
        name: "Remera La Sirenita",
        price: 1000,
        stock:5,
        imgURL: "IMG/img/duh.jpg",
        category: "Remeras"
    },
    {
        id: 5,
        name: "Remera de los GUN'S",
        price: 600,
        stock:5,
        imgURL: "IMG/img/guns1.jpg",
        category: "Remeras"
    },
    {
        id: 6,
        name: "Remera Jocker",
        price: 800,
        stock:10,
        imgURL: "IMG/img/jocker.jpg",
        category: "Remeras"
    }
  ]
  
  return (
    <>
    <div>
      <h2 className="Greeting">{parametros.saludo}</h2>
      <ItemList products={products}/>
    </div>
    </>
  );
};

export default ItemListContainer;
