import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import ListCategory, { Title } from "../../components/ListCategory";
import ListProducts from "../../components/ListProducts";
import { getCategories } from "../../services/categories-service";
import { handleCategories } from "./utils";

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
      <ListCategory categories={categories} />
      <CustomTitle>Popular Products</CustomTitle>
      <ListProducts products={popularProducts} />
    </>
  )
}

export default Home;