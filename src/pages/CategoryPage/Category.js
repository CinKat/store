import styled from "@emotion/styled";
import { useEffect } from "react"; import { useParams } from "react-router-dom"
import { getCategory } from "../../services/categories-service";
import { colors } from "../../styles/colors";
import ListProducts from "../../components/ListProducts";
import { useAuth } from "../../context/auth-context";

const NameCategory = styled.h4`
  color: ${colors.main.thiclBlack};
  text-transform: capitalize;
  padding-bottom: 1.5rem;
`

function Category() {
  let { categoryId } = useParams();
  const { allCategory, productsCategory } = useAuth();

  useEffect(() => {
    getCategory(categoryId)
      .then((data) => allCategory(data))
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