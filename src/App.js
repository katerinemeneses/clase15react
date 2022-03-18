import { useState } from "react";
import ProductsForm from "./components/ProductsForm";
import ProductsList from "./components/ProductsList";
import "./App.css";

function App() {
  const productsDefault = [
    {
      id: 1,
      name: "Pollo frito",
      category: "Comida",
      price: 2,
      isAvailable: true
    },
    {
      id: 2,
      name: "Jabón",
      category: "higiene",
      price: 3,
      isAvailable: false
    }
  ];

  // ESTADO PRINCIPAL
  const [products, setProducts] = useState(productsDefault);
  const [productEdit, setProductEdit] = useState(null);

  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  const removeProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const selectProduct = (product) => setProductEdit(product);

  const updateProduct = (productInfo) => {
    const index = products.findIndex(
      (product) => product.id === productInfo.id
    );
    products[index] = productInfo;
    setProducts([...products]);
  };

  return (
    <div className="App">
      <ProductsForm
        addProduct={addProduct}
        productEdit={productEdit}
        selectProduct={selectProduct}
        updateProduct={updateProduct}
      />
      <ProductsList
        products={products}
        removeProduct={removeProduct}
        selectProduct={selectProduct}
      />
    </div>
  );
}

export default App;
