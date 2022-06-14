
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

      function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
            Room_names = childKey;
           //Start code
           console.log("Room name is - " + Room_names);
           row = "<div class='room_name' id="+Room_names+" onclick='redirect(this.id)'>#"+Room_names+"</div><hr>";
           document.getElementById("output").innerHTML += row;  
           //End code
           });});}
     getData();
     
     function addRoom() {
           room_name = document.getElementById("room_name").value;
           firebase.database().ref("/").child(room_name).update({
                 purpose: "adding room name"
           });
     
           localStorage.setItem("Room_Name", room_name);
           window.location = "kwitter_page.html";
     }
     
     function redirect(name) {
           console.log(name);
           localStorage.setItem("Room_name", name);
           window.location = "kwitter_page.html";
     }
     
     function logout() {
           localStorage.removeItem("User Name");
           localStorage.removeItem("Room_name");
           window.location = "index.html";
     }
     