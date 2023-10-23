import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDv1Ovw7Wtzpp6e7H2jEknl6jDdcGcYmA0",
  authDomain: "subway-728b7.firebaseapp.com",
  projectId: "subway-728b7",
  storageBucket: "subway-728b7.appspot.com",
  messagingSenderId: "185299801599",
  appId: "1:185299801599:web:1a47fa4fd0e9f88e4e83ca"
};
const apps = initializeApp(firebaseConfig);
const db = getFirestore(apps);

import { collection, getDocs } from "firebase/firestore";
const dailyRandomSubs = []; 
const querySnapshot = await getDocs(collection(db, "sub-collection"));
querySnapshot.forEach((doc) => {
  const data = doc.data();
  console.log(doc.id, " => ", data);
  dailyRandomSubs.push(data);
});