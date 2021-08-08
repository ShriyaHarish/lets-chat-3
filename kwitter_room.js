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

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
room_name = document.getElementById("room_name").value;

firebase.database().ref("/").child(room_name).update({
purpose : "adding room name"
});

localStorage.setItem("room_name", room_name);

window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
   Room_names = childKey;
   console.log("Room Name - " + Room_names);
  row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
  document.getElementById("output").innerHTML += row;
});
});

}

getData();

function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name", name);
window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "kwitter.html";
}
