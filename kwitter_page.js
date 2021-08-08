var firebaseConfig = {
    apiKey: "AIzaSyAath6r-hucnPVIGacp3GUw8IUviEXV8dE",
    authDomain: "kwitter-2c04e.firebaseapp.com",
    databaseURL: "https://kwitter-2c04e-default-rtdb.firebaseio.com",
    projectId: "kwitter-2c04e",
    storageBucket: "kwitter-2c04e.appspot.com",
    messagingSenderId: "841716025431",
    appId: "1:841716025431:web:1e0f3b223c882db314bb12"
  };
  firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");
    
function send()
{
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
          });
    document.getElementById("msg").value = "";
}

function logout()
{
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location.replace("kwitter.html");
}