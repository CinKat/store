import { useEffect, useState } from "react";
import Home from "./pages/Home/Home";
import { getProducts } from "./services/products-service";

function App() {
  const [products, setProducts] = useState('')

  useEffect(() => {
    getProducts()
      .then((data) => {
        setProducts(data)
      })
  }, [])

  const popularProducts = products ? products.filter((item) => item.rating.rate > 4.5) : '';

  return (
    <div>
      <Home products={products} popularProducts={popularProducts} />
    </div>
  );
}

export default App;
