import apiFetch from "./api-fetch";

export function getProducts() {
  return apiFetch('/products')
}

export function getSingleProduct(id) {
  return apiFetch(`/products/${id}`)
}

export function createProducts(data) {
  return apiFetch('/products', {
    body: data,
  })
}

export function updateProducts(id, data) {
  return apiFetch(`/products/${id}`, {
    body: data,
    method: "PATCH",
  })
}

export function deleteProduct(id) {
  return apiFetch(`/products/${id}`, {
    method: "DELETE",
  })
}