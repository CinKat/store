import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { MdProductionQuantityLimits } from "react-icons/md";
import { Route, Routes } from "react-router-dom";
import Category from "./components/Category";
import Header from "./components/Header";
import Home from "./pages/Home/Home";
import { createProducts, deleteProduct, getProducts, updateProducts } from "./services/products-service";
import { colors } from "./styles/colors";

const Container = styled.div`
  margin: 1.5rem 1rem;
  background-color: ${colors.main.white};
`

function App() {
  const [products, setProducts] = useState('')

  useEffect(() => {
    getProducts()
      .then((data) => {
        setProducts(data)
      })
  }, [])

  function handleNewProducts(data) {
    createProducts(data)
      .then((product) => {
        setProducts([...products, product]);
      })
      .catch((error) => console.log(error))
  }

  function handleUpdateProducts(id, data) {
    updateProducts(id, data)
      .then((product) => {
        let updateData = products.map((item) => {
          if (item.id === product.id) {
            item = { ...item, ...product }
          }
          return item
        })
        setProducts(updateData);
      })
      .catch((error) => console.log(error))
  }


  function handleDeleteProducts(id) {
    deleteProduct(id)
      .then((product) => {
        let filterData = products.filter((item) => item.id !== product.id)
        setProducts(filterData);
      })
      .catch((error) => console.log(error))
  }

  return (
    <>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<Home products={products} onCreate={handleNewProducts} onUpdate={handleUpdateProducts} onDelete={handleDeleteProducts} />} />
          <Route path="category/:categoryId" element={<Category />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
