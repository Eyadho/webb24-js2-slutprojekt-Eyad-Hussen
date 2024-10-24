// jag importerar funktioner och bibliotek från react och firebase.
import React, {useEffect, useState} from "react"; //useState En hook som används för att definiera en variabel som kan uppdateras och få komponenten att renderas om när den ändras. useEffect: hämta data, prenumerera på händelser eller manipulera DOM.
import {db} from '../firebase-fil';
import { collection, getDocs } from "firebase/firestore"; 



// jag definirar en komponent somtar emot prop 'addToBag', och jag lagrar produkter i 'products'
const ListOfProducts = ({ addToBag }) => {
    const [products, setProducts] = useState([]);

    // useEffect hämtar produktdata när 'listOfProducts' laddas.
    useEffect(() => {
        // här hämstar jag produkter från min databas i firebase.
        const fetchProducts = async () => {
            // querySnapshot innehåller alla dokument som hämtades från firebase.
            const querySnapshot = await getDocs(collection(db, 'products')); 
            // här är en arrow func som skapar nytt objekt som innehåller -id: doc.id: ID från firebase och -doc.data: produktdata från firebase såsom name och image.
            const dataOfProducts = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })); // ny array skapas ´dataOfProducts´ och innehåller objekt för varje produkt.
            setProducts(dataOfProducts);
        };
        fetchProducts(); // anropa func för att hämta produkt
    }, []); // en tom array betyder att useEffect kommer köras bara en gång vid montering.


    // return JSX för rendering
    return (
        <div>
            
        </div>
    );
};

export default ListOfProducts;




