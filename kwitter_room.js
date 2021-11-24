const firebaseConfig = {
      apiKey: "AIzaSyBIbaWyvEwiJ_9Di0HP__Voi4S8Xlw22H8",
      authDomain: "kwitter-bc093.firebaseapp.com",
      projectId: "kwitter-bc093",
      storageBucket: "kwitter-bc093.appspot.com",
      messagingSenderId: "625466310532",
      appId: "1:625466310532:web:a206de7642cde93495e7d1"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
