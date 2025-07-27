import { DB } from "./firebase.js";

import { collection, getDocs } from "firebase/firestore";

const productsCollection = collection(DB, "products");

export const getAllProducts = async () => {
    try {
        const snapshot = await getDocs(productsCollection)
        const products = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        return products;
    } catch (error) {
        console.log(error);
    }
}

/*export const getAllProducts = (req,res) => {
    return[{id:1,name:"product 1"}]
}*/