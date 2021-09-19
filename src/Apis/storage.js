import { firebase } from "../config";

const storage = firebase.storage();

export async function uploadFile(file) {
  const { ref } = await storage.ref(`image/${file.name}`).put(file);
  return await ref.getDownloadURL();
}
