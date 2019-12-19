function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    if (name$$email=== "") {
      alert("please fill in your name and email");
     
    } else {
      alert(name + ", Thank you for your comment.");
    }
    event.preventDefault();
  }var sizePrices = [1000, 650, 350];
  var deliveryPrices = [0, 200];
  function TotalPrice(price, quantity, delivery, toppings, crust) {
    this.price = price;
    this.quantity = quantity;
    this.delivery = delivery;
  }
  TotalPrice.prototype.finalTotal = function() {
    return (
      (this.price + this.delivery ) * this.quantity
    );
  };
  