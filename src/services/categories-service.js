import apiFetch from "./api-fetch";

export function getCategories() {
  return apiFetch('/products/categories')
}