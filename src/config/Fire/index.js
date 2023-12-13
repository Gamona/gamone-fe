import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCPc9ou943gjy9bxgCDTNlea1twW_GBD4E",
  authDomain: "gamona-d7e70.firebaseapp.com",
  projectId: "gamona-d7e70",
  storageBucket: "gamona-d7e70.appspot.com",
  messagingSenderId: "305389363441",
  appId: "1:305389363441:web:635fb265a6aadf7c594950",
  measurementId: "G-EJH51L9VV1",
  databaseURL: "https://gamona-d7e70-default-rtdb.firebaseio.com/",
}

const Fire = initializeApp(firebaseConfig);
const DB = getDatabase(Fire);

export default DB;