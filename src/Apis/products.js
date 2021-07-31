import { storageApi } from ".";
import { firebase } from "../config";

const products = firebase.firestore().collection("products");

export async function list() {
  const response = await products.get();
  console.log(response.docs);
  return response.docs;
}

export async function find(id) {
  const response = await products.doc(id).get();
  console.log(response);
  return response.data;
}

export async function add(product, image) {
  const imageUrl = await storageApi.uploadFile(image);
  console.log(imageUrl);
  return await products.add({ image: imageUrl, ...product });
}
