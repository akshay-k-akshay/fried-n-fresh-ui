import { storageApi } from ".";
import { firebase } from "../config";

const products = firebase.firestore().collection("products");

export async function list() {
  const response = await products.get();
  return response.docs.map((item) => {
    return {
      id: item.id,
      ...item.data(),
    };
  });
}

export async function find(prodId) {
  const { ref, id } = await products.doc(prodId).get();
  return {
    id,
    ...(await ref.get()).data(),
  };
}

export async function add(product, image) {
  const imageUrl = await storageApi.uploadFile(image);
  console.log(imageUrl);
  return await products.add({ image: imageUrl, ...product });
}
