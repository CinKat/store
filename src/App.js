import styled from "@emotion/styled";
import { Route, Routes } from "react-router-dom";
import Category from "./components/Category";
import Header from "./components/Header";
import Home from "./pages/Home/Home";
import { colors } from "./styles/colors";

const Container = styled.div`
  margin: 1.5rem 1rem;
  background-color: ${colors.main.white};
`

function App() {


  return (
    <>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="category/:categoryId" element={<Category />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
