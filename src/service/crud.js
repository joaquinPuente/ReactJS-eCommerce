import { async } from "@firebase/util";
import { collection, query, getDocs } from "firebase/firestore";
import { db } from "./config/firebaseConfig";


export const dameTodaLaData = async (donde) => {
  const collectionRef = collection(db, donde);
  const queryRef = query(collectionRef);
  const result = await getDocs(queryRef);

  const dataAdapted = result.docs.map((doc) => fromDbToApp(doc));
  return console.log(dataAdapted);
};

export const fromDbToApp = (doc) => {
  const id = doc.id;
  const data = doc.data();

  return {
    Id: id,
    Info: data,
  };
};

dameTodaLaData("productos")

