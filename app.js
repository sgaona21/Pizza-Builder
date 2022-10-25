console.log("js linked")

///// VARIABLES /////
const form = document.querySelector("form");
const saveButton = document.getElementById("save");
const mypizzas = document.getElementById("mypizzas");
const small = document.getElementById("small");
const medium = document.getElementById("medium");
const large = document.getElementById("large");
const thin = document.getElementById("thin");
const original = document.getElementById("original");
const pan = document.getElementById("pan");
const pepperoni = document.getElementById("pepperoni");
const sausage = document.getElementById("sausage");
const mushroom = document.getElementById("mushroom");
const mySavedPizzas = document.getElementById("my-pizzas")


class Pizza {
    constructor(size, crust, toppings) {
        this.size = size;
        this.crust = crust;
        this.toppings = toppings;
    }
}

let newPizza  = new Pizza(null, null, null);

form.addEventListener("submit", (e) => {
    // e.preventDefault();
    let toppingsArray = [];
    newPizza.toppings = toppingsArray;
    if(small.checked === true) {
      newPizza.size = "small";
      console.log(newPizza)
    }
    if (medium.checked === true) {
        newPizza.size = "medium";
    }
    if (large.checked === true) {
        newPizza.size = "large";
    }
    if(thin.checked === true) {
        newPizza.crust = "thin";
      }
      if (original.checked === true) {
          newPizza.crust = "original";
      }
      if (pan.checked === true) {
          newPizza.crust = "pan";
      }
      if (pepperoni.checked === true) {
        toppingsArray.push("pepperoni");
      }
      if (sausage.checked === true) {
        toppingsArray.push("sausage");
      }
      if (mushroom.checked === true) {
        toppingsArray.push("mushroom");
      }

      let newPizzaString = JSON.stringify(newPizza);
      localStorage.setItem("newPizza", newPizzaString)

});
const pizza1 = document.createElement("h4");
const pizzaType = document.createElement("p");
const editButton = document.createElement("button");
const deleteButton = document.createElement("button");


let newPizzaUntied = JSON.parse(localStorage.getItem("newPizza"))

deleteButton.textContent = "Delete";
editButton.textContent = "Edit";
pizzaType.textContent = `${newPizzaUntied.size}, ${newPizzaUntied.crust}, ${newPizzaUntied.toppings}`;
pizza1.textContent = "Pizza 1";

mySavedPizzas.appendChild(pizza1);
mySavedPizzas.appendChild(pizzaType);
mySavedPizzas.appendChild(editButton)
mySavedPizzas.appendChild(deleteButton);





console.log(localStorage)





