import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Category from "./components/Category";
import Header from "./components/Header";
import Home from "./pages/Home/Home";
import { createProducts, getProducts } from "./services/products-service";
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

  return (
    <>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<Home products={products} onSubmit={handleNewProducts} />} />
          <Route path="category/:categoryId" element={<Category />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
