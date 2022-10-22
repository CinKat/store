import { createContext, useContext, useEffect, useState } from "react";
import { handleCategories } from "../pages/HomePage/utils";
import { getCategories } from "../services/categories-service";
import { createProducts, deleteProduct, getProducts, updateProducts } from "../services/products-service";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [products, setProducts] = useState('');
  const [categories, setCategories] = useState("");
  const [productsCategory, setProductsCategory] = useState('');

  useEffect(() => {
    getProducts()
      .then((data) => {
        setProducts(data)
      })
  }, [])

  useEffect(() => {
    getCategories()
      .then((data) => {
        const allCategory = handleCategories(data)
        setCategories(allCategory)
      })
      .catch(console.log)
  }, [])

  function updateCategories(categories) {
    setProductsCategory(categories)
  }


  console.log(productsCategory)
  function handleNewProducts(data) {
    createProducts(data)
      .then((product) => {
        setProducts([...products, product]);
      })
      .catch((error) => console.log(error))
  }

  function handleUpdateProducts(id, data) {
    console.log(id)
    updateProducts(id, data)
      .then((product) => {
        let updateData = products.map((item) => {
          if (item.id === product.id) {
            item = { ...item, ...product }
          }
          return item
        })

        let updateCategoryData = productsCategory.map((item) => {
          if (item.id === product.id) {
            item = { ...item, ...product }
          }
          return item
        })
        setProducts(updateData);
        setProductsCategory(updateCategoryData)
      })
      .catch((error) => console.log(error))
  }

  function handleDeleteProducts(id) {
    console.log(id)
    deleteProduct(id)
      .then((product) => {
        let filterData = products.filter((item) => item.id !== product.id)
        let filterCategoryData = productsCategory.filter((item) => item.id !== product.id)

        setProducts(filterData);
        setProductsCategory(filterCategoryData)
      })
      .catch((error) => {
        console.log(`ERROR!!: ${error}`)
        let filterData = products.filter((item) => item.id !== id)
        setProducts(filterData)
      })
  }

  return (
    <AuthContext.Provider
      value={{
        products,
        categories,
        productsCategory,
        allCategory: updateCategories,
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