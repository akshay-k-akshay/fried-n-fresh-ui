import { firebase } from "../config";

// const users = firebase.firestore().collection("users");
const userCart = firebase.firestore().collection("cart");

export async function cart(userId) {
  userCart
    .doc(userId)
    .get()
    .then((response) => {
      return response.docs;
    });
}
