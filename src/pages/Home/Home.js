import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import Category, { Title } from "../../components/Category";
import Header from "../../components/Header";
import ListProducts from "../../components/ListProducts";
import { getCategories } from "../../services/categories-service";
import { colors } from "../../styles/colors";
import { handleCategories } from "./utils";

const Container = styled.div`
  margin: 1.5rem 1rem;
  background-color: ${colors.main.white};
`
const CustomTitle = styled(Title)`
  margin-bottom: 1.5rem;
`

function Home({ products, popularProducts }) {
  const [categories, setCategories] = useState("")

  useEffect(() => {
    getCategories()
      .then((data) => {
        const allCategory = handleCategories(data)
        setCategories(allCategory)
      })
      .catch(console.log)
  }, [])

  return (
    <>
      <Header />
      <Container>
        <Category categories={categories} />
        <CustomTitle>Popular Products</CustomTitle>
        <ListProducts products={popularProducts} />
      </Container>
    </>
  )
}

export default Home;