import { firebase } from "../config";

const users = firebase.firestore().collection("users");

export async function cart(userId) {
  users
    .doc(userId)
    .get()
    .then((response) => {
      return response.docs;
    });
}
