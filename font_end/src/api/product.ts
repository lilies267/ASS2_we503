import instance from "./instance";
import { IProduct, updateForm } from "../models";

export const getAll = () => {
  const uri = "/products";
  return instance.get(uri);
};

export const getById = (id: string) => {
  const uri = "/products/" + id;
  return instance.get(uri);
};

export const remove = (id: string | number) => {
  const token = JSON.parse(localStorage.getItem("user") as string);

  const uri = "/products/" + id;
  return instance.delete(uri, {
    headers: {
      Authorization: "Bearer " + token.accessToken,
    },
  });
};

export const addProduct = (product) => {
  const token = JSON.parse(localStorage.getItem("user") as string);
  const uri = "/products";
  return instance.post(uri, product, {
    headers: {
      Authorization: "Bearer " + token.accessToken,
    },
  });
};
export const update = (id: string, body: updateForm) => {
  const token = JSON.parse(localStorage.getItem("user") as string);
  const uri = "/products/" + id;
  return instance.patch(uri, body, {
    headers: {
      Authorization: "Bearer " + token.accessToken,
    },
  });
};
