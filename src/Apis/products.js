import { firebase } from "../config";

const products = firebase.firestore().collection("products");

export async function list() {
  products.get().then((response) => {
    return response.docs;
  });
}

export async function find(id) {
  products
    .doc(id)
    .get()
    .then((response) => {
      return response.data;
    });
}
