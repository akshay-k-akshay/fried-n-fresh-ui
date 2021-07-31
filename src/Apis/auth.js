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
      return response.user
        .updateProfile({ displayName: `${signUpInfo.firstName} ${signUpInfo.lastName}` })
        .add({
          id: response.user.uid,
          ...signUpInfo,
        })
        .then((res) => {
          return res;
        });
    });
}
