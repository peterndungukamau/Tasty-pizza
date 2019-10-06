// Business interface logic
var totalCosts = [];

function PlaceOrder (size ,crust ,toppings){
    this.size = size;
    this.crust = crust;
    this.toppings = toppings;
    this.price = 0;
}

var sizePizza = ["Small","Medium","Large"];
var toppingsPizza = ["topping1","topping2","topping3"];
var crustPizza = ["Thin Crust","Thick Crust","Cheese Filled Crust","Stuffed Crust"];

PlaceOrder.prototype.cost = function(){
if(this.size === sizePizza[0]){
    this.price += 200;
    }

else if(this.size === sizePizza[1]){
    this.price += 150;
    }

else if(this.size === sizePizza[2]){
    this.price += 100;
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
    
        alert(size + crust + toppings + name + totalCosts);
    });

    

})
