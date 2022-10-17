import apiFetch from "./api-fetch";

export function getProducts() {
  return apiFetch('/products')
}

export function createProducts(data) {
  return apiFetch("/products", {
    body: data,
  })
}