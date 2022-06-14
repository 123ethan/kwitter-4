const firebaseConfig = {
      apiKey: "AIzaSyBzY7CJ7jB9fL65bbZ2yiKwm-O804fCoFA",
      authDomain: "kwitter-bece8.firebaseapp.com",
      databaseURL: "https://kwitter-bece8-default-rtdb.firebaseio.com",
      projectId: "kwitter-bece8",
      storageBucket: "kwitter-bece8.appspot.com",
      messagingSenderId: "993052443781",
      appId: "1:993052443781:web:87cd6495127c8b90a9d5ec"
    };
    
    // Initialize Firebase
      firebase.initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function send()
{
      msg = documnet.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value = ""
}
function logout() {
      localStorage.removeItem("User Name");
      localStorage.removeItem("Room_name");
      window.location = "index.html";
}
