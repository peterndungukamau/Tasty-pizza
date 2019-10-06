// Business interface logic
var totalCosts = [];

function PlaceOrder (size ,crust ,toppings){
    this.size = size;
    this.crust = crust;
    this.toppings = toppings;
    this.price = 0;
}

var sizePizza = ["Small","Medium","Large"];
var toppingsPizza = ["Pepperoni","Extra cheese","Green peppers"];
var crustPizza = ["Thin Crust","Thick Crust","Cheese Filled Crust","Stuffed Crust"];

PlaceOrder.prototype.cost = function(){
if(this.size === sizePizza[0]){
    this.price += 100;
    }

else if(this.size === sizePizza[1]){
    this.price += 150;
    }

else if(this.size === sizePizza[2]){
    this.price += 200;
 }

 if(this.crust === crustPizza[0]){
    this.price += 100;
}

else if(this.crust === crustPizza[1]){
    this.price += 100;
}

else if(this.crust === crustPizza[2]){
    this.price += 100;
}

else if(this.crust === crustPizza[3]){
    this.price += 100;
}

if(this.toppings === toppingsPizza[0]){
    this.price += 50;
}

else if(this.toppings === toppingsPizza[1]){
       this.price += 50;
}

else if(this.toppings === toppingsPizza[2]){
    this.price += 50;
}

return this.price

    
}



// user interface logic
$(document).ready(function(){
    $("button#submit").click(function(event) {
        event.preventDefault();
        var size = $("#size").val();
        var crust = $("#crust").val();
        var toppings = $("#toppings").val();
        var name = $("#name").val();
        var newPizzaOrder = new PlaceOrder (size ,crust ,toppings);
        newPizzaOrder.cost();
        totalCosts.push(newPizzaOrder.price);
    
        alert("Your Pizza order is " + name + " " + size + " "  + toppings + " " + crust + " and the total cost is " + totalCosts + " .Thanks for ordering we will deliver shortly.");

    });
    
        $("#delivery").click(function () { 
            prompt("Name")
            prompt("Location")
            prompt("Addrress")
            alert("Your charges for delivery is ksh 200")
            alert("Your order will be delivered to your location")        
            alert("Thank you for Your Purchase!Your pizza will be delivered to your location in just a while.")
            
        });

        $("button#contact").submit(function(event) {
            var namee = $("#namee").val();
            var email = $("#email").val();
            var message =$("#message").val();
            event.preventDefault();
            alert(namee + " we have received your message . Thank you for reaching out to us.");
          });
        

})
