
<script type="module" src="firebase.js"></script>
const firebaseApp = firebase.initializeApp({  
    
    apiKey: "AIzaSyBjnYH6iFFDJOFxK3vs_DxROnXO1llPS_M",
    authDomain: "auth-66467.firebaseapp.com",
    projectId: "auth-66467",
    storageBucket: "auth-66467.appspot.com",
    messagingSenderId: "620875105465",
    appId: "1:620875105465:web:29f26aa3ff2a0669094768",
    measurementId: "G-9J2X6MW5GH"
});
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

const signUp = () => {
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    console.log(email,password);

    firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((result) => {
    document.write("Succesfully Created account")
    console.log("result")
  })
  .catch((error) => {
console.log(error.code);
console.log(error.message)

    // ..
  });
}
