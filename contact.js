$(document).ready(function(){


  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBOoWTCi68h5HJ2JVn05cQi3MTTiJEYd-w",
    authDomain: "contact-c299d.firebaseapp.com",
    databaseURL: "https://contact-c299d.firebaseio.com",
    projectId: "contact-c299d",
    storageBucket: "",
    messagingSenderId: "1027375304020"
  };
  firebase.initializeApp(config);
  database = firebase.database();
  var contactRef = database.ref("contact");
  $("#submit").on("click",function(e){

 e.preventDefault()
                var name = $("#name").val().trim();
                var email = $("#email").val().trim();
               
                var comment = $("#comment").val().trim();
                contactRef = contactRef.push();
                contactRef.set({
                    name: name,
                    email: email,
                    comment: comment
                })
  })
})