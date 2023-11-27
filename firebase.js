const firebase = require("firebase/app");
const { getFirestore, collection, setDoc, doc, addDoc, updateDoc, getDocs, query, orderBy } = require("firebase/firestore");

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzmRrHAiDbD0YNZYxVb29WZpOHr8VpAbY",
  authDomain: "createyoursubway.firebaseapp.com",
  projectId: "createyoursubway",
  storageBucket: "createyoursubway.appspot.com",
  messagingSenderId: "560805339123",
  appId: "1:560805339123:web:3ad11b616b9ca00f56fc86"
};
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = getFirestore(app);


// Function to create a new user
const createUser = async (users) => {
  try {
    await addDoc(collection(db, "users"), users);
    console.log("User added successfully");
  } catch (error) {
    console.error("Error adding user: ", error);
  }
};

// Function to get all users
const getUsers = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
    });
  } catch (error) {
    console.error("Error getting users: ", error);
  }
};

// Function to get all DailySubs
const getDailySubs = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "DailySubs"));
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
    });
  } catch (error) {
    console.error("Error getting DailySubs: ", error);
  }
};

const updateUserScore = async (usersId, newScore) => {
  const usersRef = doc(db, 'users', usersId);

  // Set the 'score' field of the user
  await updateDoc(usersRef, {
    score: newScore
  });
}

module.exports.db = db;
module.exports = {
    createUser,
    getUsers,
    getDailySubs,
    updateUserScore
};

