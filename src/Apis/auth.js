import { firebase } from "../config";

export async function signIn(email, password) {
  return firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((response) => {
      console.log(response);
    });
}

export async function signUp(signUpInfo) {
  return firebase
    .auth()
    .createUserWithEmailAndPassword(signUpInfo.email, signUpInfo.password)
    .then((response) => {
      response.user
        .updateProfile({
          displayName: `${signUpInfo.lastName} ${signUpInfo.lastName}`,
        })
        .then(() => {
          firebase
            .firestore()
            .collection("users")
            .add({
              id: response.user.id,
              email: response.user.email,
              phone: signUpInfo.phone,
              firstName: signUpInfo.firstName,
              lastName: signUpInfo.lastName,
            })
            .then((res) => {
              return res;
            });
        });
    });
}
