import { useState, useEffect } from "react";
import { projectFirestore } from "../firebase/config";

const useFirestore = (collection) => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    const unsub = projectFirestore
      .collection(collection)
      .orderBy("createdAt", "desc")
      .onSnapshot((docs) => {
        let documents = [];
        docs.forEach((doc) => {
          documents.push({ ...doc.data(), id: doc.id });
        });
        setImages(documents);
      });
    return () => unsub();
  }, [collection]);
  return { images };
};

export default useFirestore;
