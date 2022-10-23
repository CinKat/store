import styled from "@emotion/styled";
import { Route, Routes, useSearchParams } from "react-router-dom";
import Category from "./pages/CategoryPage/Category";
import Home from "./pages/HomePage/Home";
import Search from "./pages/SearchPage";
import { colors } from "./styles/colors";

const Container = styled.div`
  margin: 1.5rem 1rem;
  background-color: ${colors.main.white};
  @media (min-width: 600px) {
    margin: 1.5rem 6rem;
  }
`

function App() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") ?? "";

  function changeSearchParams(keyword) {
    setSearchParams(keyword)
  }

  return (
    <>
      <Search query={query} onSearch={changeSearchParams} />
      {query ? '' :
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="category/:categoryId" element={<Category />} />
          </Routes>
        </Container>
      }

    </>
  );
}

export default App;
