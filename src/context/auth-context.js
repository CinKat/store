import { createContext, useContext, useEffect, useState } from "react";
import { createProducts, deleteProduct, getProducts, updateProducts } from "../services/products-service";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [products, setProducts] = useState('');

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
        create: handleNewProducts,
        update: handleUpdateProducts,
        remove: handleDeleteProducts,
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