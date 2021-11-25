var firebaseConfig = {
    apiKey: "AIzaSyADI5i38tRoxmas3c_fZWjXDVss4xHscDk",
    authDomain: "cityguy-jyeg.firebaseapp.com",
    databaseURL: "https://cityguy-jyeg-default-rtdb.firebaseio.com",
    projectId: "cityguy-jyeg",
    storageBucket: "cityguy-jyeg.appspot.com",
    messagingSenderId: "195496305375",
    appId: "1:195496305375:web:80038c881484b114f2bf6a"
  };
  
  //Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name = localStorage.setItem("user_name", user_name);
  room_name = localStorage.setItem("room_name", room_name);
  function send(){
    msg = document.getElementById("msg").value;
    console.log("Message "+msg);
    firebase.database().ref(room_name).push({
        name: user_name, 
        message: msg, 
        like:0
    });
    document.getElementById("msg").value = "";
  }