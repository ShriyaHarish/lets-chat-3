var firebaseConfig = {
    apiKey: "AIzaSyAath6r-hucnPVIGacp3GUw8IUviEXV8dE",
    authDomain: "kwitter-2c04e.firebaseapp.com",
    databaseURL: "https://kwitter-2c04e-default-rtdb.firebaseio.com",
    projectId: "kwitter-2c04e",
    storageBucket: "kwitter-2c04e.appspot.com",
    messagingSenderId: "841716025431",
    appId: "1:841716025431:web:1e0f3b223c882db314bb12"
  };
firebase.initilizeApp(firebaseConfig);

function addUser()
{
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name); 
    window.location = "kwitter_room.html";
}
