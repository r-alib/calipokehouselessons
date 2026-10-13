// Shared Firebase project (same database as CALIPOKE STATION).
// Training data lives under /training/results — nothing else in the DB is touched.
const firebaseConfig = {
  apiKey: "AIzaSyB2I2sR9czF6F29OZMyEZubmwQGP7nWFlc",
  authDomain: "calipoke-packstation.firebaseapp.com",
  databaseURL: "https://calipoke-packstation-default-rtdb.firebaseio.com",
  projectId: "calipoke-packstation",
  storageBucket: "calipoke-packstation.firebasestorage.app",
  messagingSenderId: "125288117157",
  appId: "1:125288117157:web:461b4d553e100c07b9ae4c"
};
const TRAINING_PATH = "training/results";
function trainingDb(){
  if(!firebase.apps.length) firebase.initializeApp(firebaseConfig);
  return firebase.database();
}
