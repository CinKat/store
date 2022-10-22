import styled from "@emotion/styled";
import { useEffect } from "react"; import { useParams } from "react-router-dom"
import { useAuth } from "../context/auth-context";
import { colors } from "../styles/colors";
import ListProducts from "./ListProducts";

const NameCategory = styled.h4`
  color: ${colors.main.thiclBlack};
  text-transform: capitalize;
`

function Category() {
  let { categoryId } = useParams();
  const { getProductsByCategory, productsCategory } = useAuth()

  useEffect(() => {
    getProductsByCategory(categoryId)
  }, [categoryId, getProductsByCategory])

  return (
    <div>
      <NameCategory>{categoryId}</NameCategory>
      <ListProducts products={productsCategory} />
    </div>
  )
}

export default Category