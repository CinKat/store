import { BASE_URI } from "../config";

export default async function apiFetch(
  endpoint,
  { method, headers, body } = {}
) {
  // const token = sessionStorage.getItem(tokenKey);

  // if (token) {
  //   headers = {
  //     Authorization: `Token token=${token}`,
  //     ...headers,
  //   };
  // }

  if (body) {
    headers = {
      "Content-Type": "application/json",
      ...headers,
    };
  }

  const config = {
    method: method || (body ? "POST" : "GET"),
    headers,
    body: body ? JSON.stringify(body) : null,
  };

  const response = await fetch(BASE_URI + endpoint, config);

  let data;
  if (!response.ok) {
    // if (response.status === 401) sessionStorage.removeItem(tokenKey);
    try {
      data = await response.json();
    } catch (error) {
      throw new Error(response.statusText);
    }
    if (typeof data.errors === "object") {
      let arr = [];
      for (const key in data.errors) {
        arr.push(`${key}: ${data.errors[key]}`);
      }
      throw new Error(arr);
    } else {
      throw new Error(data.errors);
    }
  }

  try {
    data = await response.json();
  } catch (error) {
    data = response.status;
  }

  return data;
}