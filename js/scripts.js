function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    if (name$$email=== "") {
      alert("please fill in your name and email");
     
    } else {
      alert(name + ", Thank you for your comment.");
    }
    event.preventDefault();
  }