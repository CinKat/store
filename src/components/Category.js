import styled from "@emotion/styled";
import { useEffect, useState } from "react"; import { useParams } from "react-router-dom"
import { getCategory } from "../services/categories-service";
import { colors } from "../styles/colors";
import ListProducts from "./ListProducts";

const NameCategory = styled.h4`
  color: ${colors.main.white};
  text-transform: capitalize;
`

function Category() {
  let { categoryId } = useParams();
  const [categoryProducts, setCategoryProducts] = useState('')

  useEffect(() => {
    getCategory(categoryId)
      .then((data) => setCategoryProducts(data))
      .catch(console.log)
  }, [categoryId])

  return (
    <div>
      <NameCategory>{categoryId}</NameCategory>
      <ListProducts categoryProducts={categoryProducts} />
    </div>
  )
}

export default Category