import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, getDocs, doc, updateDoc } from 'firebase/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzmRrHAiDbD0YNZYxVb29WZpOHr8VpAbY",
  authDomain: "createyoursubway.firebaseapp.com",
  projectId: "createyoursubway",
  storageBucket: "createyoursubway.appspot.com",
  messagingSenderId: "560805339123",
  appId: "1:560805339123:web:3ad11b616b9ca00f56fc86"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Función para crear un nuevo usuario
export async function createUser(users) {
  try {
    await addDoc(collection(db, "users"), users);
    console.log("Usuario añadido exitosamente");
  } catch (error) {
    console.error("Error al agregar usuario: ", error);
  }
}

// Función para obtener todos los usuarios
export async function getUsers() {
  try {
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
    });
  } catch (error) {
    console.error("Error al obtener usuarios: ", error);
  }
}

// Función para obtener todos los DailySubs
export async function getDailySubs() {
  try {
    const querySnapshot = await getDocs(collection(db, "DailySubs"));
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
    });
  } catch (error) {
    console.error("Error al obtener DailySubs: ", error);
  }
}

// Función para actualizar el puntaje de un usuario
export async function updateUserScore(usersId, newScore) {
  const usersRef = doc(db, 'users', usersId);

  // Establecer el campo 'score' del usuario
  await updateDoc(usersRef, {
    score: newScore
  });
}

// Exportar el objeto db

export { db };


//export { db };