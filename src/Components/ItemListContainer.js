import ItemList from "./ItemList";

const ItemListContainer = (parametros) => {

  const products = [
    {
        id: 1,
        name: "Remera Batman",
        price: 1350,
        stock: 10,
        imgURL: "IMG/img/batmannegra.jpg",
        category: "Remeras"
    },
    {
        id: 2,
        name: "Remera California",
        price: 1350,
        stock:5,
        imgURL: "IMG/img/CALIFORNIA.jpg",
        category:"Remeras"
    },
    {
        id: 3,
        name: "Remera Metallica",
        price: 1350,
        stock:10,
        imgURL: "IMG/img/metallica.jpg",
        category: "Remeras"
    },
    {
        id: 4,
        name: "Remera La Sirenita",
        price: 1350,
        stock:5,
        imgURL: "IMG/img/duh.jpg",
        category: "Remeras"
    },
    {
        id: 5,
        name: "Remera de los GUN'S",
        price: 1350,
        stock:5,
        imgURL: "IMG/img/guns1.jpg",
        category: "Remeras"
    },
    {
        id: 6,
        name: "Remera Jocker",
        price: 1350,
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
