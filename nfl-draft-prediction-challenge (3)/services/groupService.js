import { getFirestore, doc, getDoc } from "firebase/firestore";

export const getGroup = async (id) => {
  const db = getFirestore();
  const groupRef = doc(db, "groups", id);
  const snap = await getDoc(groupRef);
  return snap.exists() ? snap.data() : null;
};