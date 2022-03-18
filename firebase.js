import { initializeApp } from 'firebase/app';

import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';



const firebaseConfig = {
    
    apiKey: "AIzaSyCqfFKcaEe2J9Dopa80VLmG62Py5KhddP0",
    authDomain: "moebius-8ba02.firebaseapp.com", 
    databaseURL: "https://moebius-8ba02-default-rtdb.firebaseio.com",  
    projectId: "moebius-8ba02",  
    storageBucket: "moebius-8ba02.appspot.com",
    messagingSenderId: "404676511853",  
    appId: "1:404676511853:web:4895c6ec5b3786637fd764"
};



const app = initializeApp(firebaseConfig);

const db = getFirestore(app);



// Get a list of cities from your database


async function getCities(db) {

    alert('hola');

/*   const citiesCol = collection(db, 'cities');

  const citySnapshot = await getDocs(citiesCol);

  const cityList = citySnapshot.docs.map(doc => doc.data());

  return cityList; */

}

getCities();