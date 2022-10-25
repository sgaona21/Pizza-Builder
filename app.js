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
let toppingsArray = [];

form.addEventListener("submit", (e) => {
    // e.preventDefault();
    newPizza.toppings = toppingsArray;
    if(small.checked === true) {
      newPizza.size = "small";
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
      localStorage.setItem("Pizza1", newPizzaString);

});


const pizza1 = document.getElementById("pizza-1");
const pizza1h4 = document.getElementById("pizza-1-h4");
const pizza1p = document.getElementById("pizza-1-p");
const pizza1Storage = JSON.parse(localStorage.getItem("newPizza"))
const pizza1Form = document.getElementById("pizza-1-form");
const pizza1SaveButton = document.getElementById("save-1");
let pizza1Conversion = JSON.parse(localStorage.getItem("Pizza1"));


if (localStorage.Pizza1 != null) {
  pizza1.style.display = "block";
  pizza1h4.textContent = "Pizza 1";
  pizza1p.textContent = `${pizza1Conversion.size}, ${pizza1Conversion.crust}, ${pizza1Conversion.toppings}`;
};

const pizza1EditButton = document.getElementById("pizza-1-edit");
const pizza1DeleteButton = document.getElementById("pizza-1-delete");

pizza1DeleteButton.addEventListener("click", () => {
  localStorage.removeItem("Pizza1");
  location.reload();
});

pizza1EditButton.addEventListener("click", () => {
  pizza1Form.style.display = "block";
  pizza1DeleteButton.style.display = "none";
  pizza1EditButton.style.display = "none";
});

pizza1SaveButton.addEventListener("click", () => {
  newPizza.toppings = toppingsArray;
    if(small1.checked === true) {
      newPizza.size = "small";
    }
    if (medium1.checked === true) {
        newPizza.size = "medium";
    }
    if (large1.checked === true) {
        newPizza.size = "large";
    }
    if(thin1.checked === true) {
        newPizza.crust = "thin";
      }
      if (original1.checked === true) {
          newPizza.crust = "original";
      }
      if (pan1.checked === true) {
          newPizza.crust = "pan";
      }
      if (pepperoni1.checked === true) {
        toppingsArray.push("pepperoni");
      }
      if (sausage1.checked === true) {
        toppingsArray.push("sausage");
      }
      if (mushroom1.checked === true) {
        toppingsArray.push("mushroom");
      }

      let newPizzaString = JSON.stringify(newPizza);
      localStorage.setItem("Pizza1", newPizzaString);
});
















console.log(localStorage)





