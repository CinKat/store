import apiFetch from "./api-fetch";

export function getCategories() {
  return apiFetch('/products/categories')
}

export function getCategory(name) {
  return apiFetch(`/products/category/${name}`)
}