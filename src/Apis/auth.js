import { firebase } from "../config";

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
