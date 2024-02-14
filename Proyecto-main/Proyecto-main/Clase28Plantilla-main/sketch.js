 import { initializeApp } from 'firebase/app';
const firebaseConfig = {
  apiKey: "AIzaSyCysQgAKfZcK8czpy8iP0cSY4-rteBp0Z0",
  authDomain: "proyecto-mapache-f12d1.firebaseapp.com",
  projectId: "proyecto-mapache-f12d1",
  storageBucket: "proyecto-mapache-f12d1.appspot.com",
  messagingSenderId: "196089811190",
  appId: "1:196089811190:web:94c957aaf52d9fe9ec9cd7",
  measurementId: "G-6TJTZCQ3VV"
};
 const app = initializeApp(firebaseConfig);

// Function to show the sign-up form
function showSignUpForm() {
  document.getElementById("start-screen").style.display = "none";
  document.getElementById("signup-screen").style.display = "block";
}

// Function to show the login form
function showLogInForm() {
  document.getElementById("start-screen").style.display = "none";
  // document.getElementById("login-screen").style.display = "block";
}

// Function to handle adding a new job placeholder
function addJob() {
  const jobContainer = document.getElementById("job-container");
  const jobInput = document.createElement("input");
  jobInput.type = "text";
  jobInput.className = "job-input";
  jobInput.placeholder = "Job";
  jobInput.required = true;
  jobContainer.appendChild(jobInput);
}

// Function to handle form submission
function submitForm(event) {
  var fist_name = null,
      last_name = null,
      profession = null,
      typeID = null,
      personID = null;

      fist_name = event.document.getElementById('name-input');
      console.log('fist_name: ' + fist_name);

      last_name = event.document.getElementById('last-name-input');
      console.log('last_name: ' + last_name);

      personID = event.document.getElementById('id-input');
      console.log('id: ' + id);

      typeID = event.document.getElementById('option-select');
      console.log('option-select: ' + option-select);

      profession = event.document.getElementById('job-input');
      console.log('profession: ' + profession);


  
  //event.preventDefault(); // Prevent the default form submission

  // Code to handle form submission
}

function registrarPersona() {
  var first_name = null,
      last_name = null,
      profession = null,
      typeID = null,
      personID = null;

      console.log('registrarPersona()');

      first_name = document.getElementById('name-input').value;
      console.log('fist_name: ' + first_name);

      last_name = document.getElementById('last-name-input').value;
      console.log('last_name: ' + last_name);

      personID = document.getElementById('id-input').value;
      console.log('personID: ' + personID);

      typeID = document.getElementById('option-select').value;
      console.log('typeID: ' + typeID);

      profession = document.getElementById('job-input').value;
      console.log('profession: ' + profession);

      writeUserData (personID, first_name, last_name, typeID, profession);

}

function writeUserData(personID, first_name, last_name, typeID,  profession) {
  console.log('writeUserData()');

  // Initialize Firebase

console.log('firebase.initializeApp(firebaseConfig)');
firebase.database().ref('personas/' + personID).set({
    ID: personID ,
    nombre: first_name,
    apellido : last_name,
    tipoId: typeID,
    ocupacion: profession ,
  
  });
}

// Event listener for form submission
const signupForm = document.getElementById("signup-form");
signupForm.addEventListener("submit", submitForm);

//const loginForm = document.getElementById("login-form");
//loginForm.addEventListener("submit", loginForm);

