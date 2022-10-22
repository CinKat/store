import styled from "@emotion/styled";
import { useEffect, useState } from "react"; import { useParams } from "react-router-dom"
import { getCategory } from "../../services/categories-service";
import { colors } from "../../styles/colors";
import ListProducts from "../../components/ListProducts";

const NameCategory = styled.h4`
  color: ${colors.main.thiclBlack};
  text-transform: capitalize;
`

function Category() {
  let { categoryId } = useParams();
  const [productsCategory, setProductsCategory] = useState('')

  useEffect(() => {
    getCategory(categoryId)
      .then((data) => setProductsCategory(data))
      .catch(console.log)
  }, [categoryId])

  return (
    <div>
      <NameCategory>{categoryId}</NameCategory>
      <ListProducts products={productsCategory} />
    </div>
  )
}

export default Category