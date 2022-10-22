import { createContext, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCategory } from "../services/categories-service";
import { createProducts, deleteProduct, getProducts, updateProducts } from "../services/products-service";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [products, setProducts] = useState('');
  const [productsCategory, setProductsCategory] = useState('')


  useEffect(() => {
    getProducts()
      .then((data) => {
        setProducts(data)
      })
  }, [])

  function getProductsByCategory(id) {
    getCategory(id)
      .then((data) => setProductsCategory(data))
      .catch(console.log)
  }

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
    <AuthContext.Provider
      value={{
        products,
        productsCategory,
        create: handleNewProducts,
        update: handleUpdateProducts,
        remove: handleDeleteProducts,
        getProductsByCategory: getProductsByCategory,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

//custom hook
function useAuth() {
  return useContext(AuthContext)
}

export { AuthProvider, useAuth };