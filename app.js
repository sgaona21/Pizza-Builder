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
const pizza1 = document.getElementById("pizza-1");
const pizza1h4 = document.getElementById("pizza-1-h4");
const pizza1p = document.getElementById("pizza-1-p");
const pizza1Storage = JSON.parse(localStorage.getItem("newPizza"));
const pizza1Form = document.getElementById("pizza-1-form");
const pizza1SaveButton = document.getElementById("save-1");
let pizza1Conversion = JSON.parse(localStorage.getItem("Pizza1"));
const pizza1EditButton = document.getElementById("pizza-1-edit");
const pizza1DeleteButton = document.getElementById("pizza-1-delete");

const pizza2 = document.getElementById("pizza-2");
const pizza2h4 = document.getElementById("pizza-2-h4");
const pizza2p = document.getElementById("pizza-2-p");
let pizza2Conversion = JSON.parse(localStorage.getItem("secondPizza"));
const pizza2EditButton = document.getElementById("pizza-2-edit");
const pizza2DeleteButton = document.getElementById("pizza-2-delete");
const pizza2Form = document.getElementById("pizza-2-form");
const pizza2SaveButton = document.getElementById("save-2");

const pizza3 = document.getElementById("pizza-3");
const pizza3h4 = document.getElementById("pizza-3-h4");
const pizza3p = document.getElementById("pizza-3-p");
let pizza3Conversion = JSON.parse(localStorage.getItem("thirdPizza"));
const pizza3EditButton = document.getElementById("pizza-3-edit");
const pizza3DeleteButton = document.getElementById("pizza-3-delete");
const pizza3Form = document.getElementById("pizza-3-form");
const pizza3SaveButton = document.getElementById("save-3");

let currentStorage = JSON.stringify(localStorage);


class Pizza {
    constructor(size, crust, toppings) {
        this.size = size;
        this.crust = crust;
        this.toppings = toppings;
    }
};

let pizzaCounter = 0;
let duplicateTracker = [];

let newPizza  = new Pizza(null, null, null);
let toppingsArray = [];

let secondPizza = new Pizza(null, null, null);
let toppingsArray2 = [];

let thirdPizza = new Pizza(null, null, null);
let toppingsArray3 = [];


form.addEventListener("submit", (e) => {
    // // e.preventDefault();
    if (!currentStorage.includes("Pizza1")) {
    newPizza.toppings = toppingsArray;
    if (small.checked === false && medium.checked === false && large.checked === false) {
      alert("Please Select a Size");
      e.preventDefault()
    }
    else if (thin.checked === false && original.checked === false && pan.checked === false) {
      alert("Please Select a Crust");
      e.preventDefault()
    } else if (pepperoni.checked === false && sausage.checked === false && mushroom.checked === false) {
      alert("Please Select a Topping");  
      e.preventDefault()
    }
    else {
    if(small.checked === true) {
      newPizza.size = "small";
    }
    if (medium.checked === true) {
        newPizza.size = "medium";
    }
    if (large.checked === true) {
        newPizza.size = "large";
    }
    if (thin.checked === true) {
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
    }
    }
    




    else if (!currentStorage.includes("secondPizza")) {
      secondPizza.toppings = toppingsArray2;
    if (small.checked === false && medium.checked === false && large.checked === false) {
      alert("Please Select a Size");
      e.preventDefault()
    }
    else if (thin.checked === false && original.checked === false && pan.checked === false) {
      alert("Please Select a Crust");
      e.preventDefault()
    } else if (pepperoni.checked === false && sausage.checked === false && mushroom.checked === false) {
      alert("Please Select a Topping");  
      e.preventDefault()
    }
    else {
    if(small.checked === true) {
      secondPizza.size = "small";
    }
    if (medium.checked === true) {
        secondPizza.size = "medium";
    }
    if (large.checked === true) {
        secondPizza.size = "large";
    }
    if (thin.checked === true) {
        secondPizza.crust = "thin";
      }
    if (original.checked === true) {
        secondPizza.crust = "original";
    }
    if (pan.checked === true) {
        secondPizza.crust = "pan";
    }
    if (pepperoni.checked === true) {
      toppingsArray2.push("pepperoni");
    }
    if (sausage.checked === true) {
      toppingsArray2.push("sausage");
    }
    if (mushroom.checked === true) {
      toppingsArray2.push("mushroom");
    }
    let secondPizzaString = JSON.stringify(secondPizza);
    localStorage.setItem("secondPizza", secondPizzaString);
    }
    
    }
    






    else if (!currentStorage.includes("thirdPizza")) {
      thirdPizza.toppings = toppingsArray3;
    if (small.checked === false && medium.checked === false && large.checked === false) {
      alert("Please Select a Size");
      e.preventDefault()
    }
    else if (thin.checked === false && original.checked === false && pan.checked === false) {
      alert("Please Select a Crust");
      e.preventDefault()
    } else if (pepperoni.checked === false && sausage.checked === false && mushroom.checked === false) {
      alert("Please Select a Topping");  
      e.preventDefault()
    }
    else {
    if(small.checked === true) {
      thirdPizza.size = "small";
    }
    if (medium.checked === true) {
        thirdPizza.size = "medium";
    }
    if (large.checked === true) {
        thirdPizza.size = "large";
    }
    if (thin.checked === true) {
        thirdPizza.crust = "thin";
      }
    if (original.checked === true) {
        thirdPizza.crust = "original";
    }
    if (pan.checked === true) {
        thirdPizza.crust = "pan";
    }
    if (pepperoni.checked === true) {
      toppingsArray3.push("pepperoni");
    }
    if (sausage.checked === true) {
      toppingsArray3.push("sausage");
    }
    if (mushroom.checked === true) {
      toppingsArray3.push("mushroom");
    }
    let thirdPizzaString = JSON.stringify(thirdPizza);
    localStorage.setItem("thirdPizza", thirdPizzaString);
    }
    }
    
    
    else {
      alert("You have reached the maximum number of pizzas. Please upgrade to the full version to unlock unlimited Pizzas")
    }
});


///// PIZZA 1 //////
if (localStorage.Pizza1 != null) {
  pizza1.style.display = "block";
  pizza1h4.textContent = "Pizza 1";
  pizza1p.textContent = `${pizza1Conversion.size}, ${pizza1Conversion.crust}, ${pizza1Conversion.toppings}`;
  pizzaCounter +=1;
  duplicateTracker.push(pizza1p.textContent)
  
};


pizza1DeleteButton.addEventListener("click", () => {
  localStorage.removeItem("Pizza1");
  location.reload();
});


pizza1EditButton.addEventListener("click", () => {
  pizza1Form.style.display = "block";
  pizza1DeleteButton.style.display = "none";
  pizza1EditButton.style.display = "none";

  if (pizza1Conversion.size === "small") {
      small1.checked = true
  }
  if (pizza1Conversion.size === "medium") {
      medium1.checked = true
  }
  if (pizza1Conversion.size === "large") {
      large1.checked = true
  }
  if (pizza1Conversion.crust === "thin") {
    thin1.checked = true
  }
  if (pizza1Conversion.crust === "original") {
      original1.checked = true
  }
  if (pizza1Conversion.crust === "pan") {
      pan1.checked = true
  }
  if (pizza1Conversion.toppings.includes("pepperoni")) {
    pepperoni1.checked = true
  }
  if (pizza1Conversion.toppings.includes("sausage")) {
      sausage1.checked = true
  }
  if (pizza1Conversion.toppings.includes("mushroom")) {
      mushroom1.checked = true
  }
});


pizza1SaveButton.addEventListener("click", (e) => {
  newPizza.toppings = toppingsArray;
  if (pepperoni1.checked === false && sausage1.checked === false && mushroom1.checked === false) {
    alert("Please Select a Topping"); 
    e.preventDefault(); 
  } 
  if (small1.checked === true) {
    newPizza.size = "small";
  }
  if (medium1.checked === true) {
      newPizza.size = "medium";
  }
  if (large1.checked === true) {
      newPizza.size = "large";
  }
  if (thin1.checked === true) {
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


///// PIZZA 2 /////
if (localStorage.secondPizza != null) {
  pizza2.style.display = "block";
  pizza2h4.textContent = "Pizza 2";
  pizza2p.textContent = `${pizza2Conversion.size}, ${pizza2Conversion.crust}, ${pizza2Conversion.toppings}`;
  pizzaCounter +=1;
  duplicateTracker.push(pizza2p.textContent)
  if (localStorage.Pizza1 === localStorage.secondPizza) {
    alert("Oops! You created a duplicate pizza. Duplicate pizzas arent allowed. Please create a new Pizza");
    localStorage.removeItem("secondPizza")
    location.reload();
  }
 
};

pizza2DeleteButton.addEventListener("click", () => {
  localStorage.removeItem("secondPizza");
  location.reload();
});

pizza2EditButton.addEventListener("click", () => {
  pizza2Form.style.display = "block";
  pizza2DeleteButton.style.display = "none";
  pizza2EditButton.style.display = "none";

  if (pizza2Conversion.size === "small") {
      small2.checked = true
  }
  if (pizza2Conversion.size === "medium") {
      medium2.checked = true
  }
  if (pizza2Conversion.size === "large") {
      large2.checked = true
  }
  if (pizza2Conversion.crust === "thin") {
    thin2.checked = true
  }
  if (pizza2Conversion.crust === "original") {
      original2.checked = true
  }
  if (pizza2Conversion.crust === "pan") {
      pan2.checked = true
  }
  if (pizza2Conversion.toppings.includes("pepperoni")) {
    pepperoni2.checked = true
  }
  if (pizza2Conversion.toppings.includes("sausage")) {
      sausage2.checked = true
  }
  if (pizza2Conversion.toppings.includes("mushroom")) {
      mushroom2.checked = true
  }
});

pizza2SaveButton.addEventListener("click", (e) => {
  secondPizza.toppings = toppingsArray2;
  if (pepperoni2.checked === false && sausage2.checked === false && mushroom2.checked === false) {
    alert("Please Select a Topping"); 
    e.preventDefault(); 
  } 
  if (small2.checked === true) {
    secondPizza.size = "small";
  }
  if (medium2.checked === true) {
      secondPizza.size = "medium";
  }
  if (large2.checked === true) {
      secondPizza.size = "large";
  }
  if (thin2.checked === true) {
      secondPizza.crust = "thin";
    }
  if (original2.checked === true) {
      secondPizza.crust = "original";
  }
  if (pan2.checked === true) {
      secondPizza.crust = "pan";
  }
  if (pepperoni2.checked === true) {
    toppingsArray2.push("pepperoni");
  }
  if (sausage2.checked === true) {
    toppingsArray2.push("sausage");
  }
  if (mushroom2.checked === true) {
    toppingsArray2.push("mushroom");
  }
  let secondPizzaString = JSON.stringify(secondPizza);
  localStorage.setItem("secondPizza", secondPizzaString);

});

if (!currentStorage.includes("Pizza1")) {
  pizza2h4.textContent = "Pizza 1"
}


///// PIZZA 3 /////
if (localStorage.thirdPizza != null) {
  pizza3.style.display = "block";
  pizza3h4.textContent = "Pizza 3";
  pizza3p.textContent = `${pizza3Conversion.size}, ${pizza3Conversion.crust}, ${pizza3Conversion.toppings}`;
  pizzaCounter +=1;
  duplicateTracker.push(pizza3p.textContent)
  if (localStorage.thirdPizza === localStorage.Pizza1 || localStorage.thirdPizza === localStorage.secondPizza) {
    alert("Oops! You created a duplicate pizza. Duplicate pizzas arent allowed. Please create a new Pizza");
    localStorage.removeItem("thirdPizza")
    location.reload();
  }
};

pizza3DeleteButton.addEventListener("click", () => {
  localStorage.removeItem("thirdPizza");
  location.reload();
});

pizza3EditButton.addEventListener("click", () => {
  pizza3Form.style.display = "block";
  pizza3DeleteButton.style.display = "none";
  pizza3EditButton.style.display = "none";

  if (pizza3Conversion.size === "small") {
      small3.checked = true
  }
  if (pizza3Conversion.size === "medium") {
      medium3.checked = true
  }
  if (pizza3Conversion.size === "large") {
      large3.checked = true
  }
  if (pizza3Conversion.crust === "thin") {
    thin3.checked = true
  }
  if (pizza3Conversion.crust === "original") {
      original3.checked = true
  }
  if (pizza3Conversion.crust === "pan") {
      pan2.checked = true
  }
  if (pizza3Conversion.toppings.includes("pepperoni")) {
    pepperoni3.checked = true
  }
  if (pizza3Conversion.toppings.includes("sausage")) {
      sausage3.checked = true
  }
  if (pizza3Conversion.toppings.includes("mushroom")) {
      mushroom3.checked = true
  }
});

pizza3SaveButton.addEventListener("click", (e) => {
  thirdPizza.toppings = toppingsArray3;
  if (pepperoni3.checked === false && sausage3.checked === false && mushroom3.checked === false) {
    alert("Please Select a Topping"); 
    e.preventDefault(); 
  } 
  if (small3.checked === true) {
    thirdPizza.size = "small";
  }
  if (medium3.checked === true) {
      thirdPizza.size = "medium";
  }
  if (large3.checked === true) {
      thirdPizza.size = "large";
  }
  if (thin3.checked === true) {
      thirdPizza.crust = "thin";
    }
  if (original3.checked === true) {
      thirdPizza.crust = "original";
  }
  if (pan3.checked === true) {
      thirdPizza.crust = "pan";
  }
  if (pepperoni3.checked === true) {
    toppingsArray3.push("pepperoni");
  }
  if (sausage3.checked === true) {
    toppingsArray3.push("sausage");
  }
  if (mushroom3.checked === true) {
    toppingsArray3.push("mushroom");
  }
  let thirdPizzaString = JSON.stringify(thirdPizza);
  localStorage.setItem("thirdPizza", thirdPizzaString);
});

if (!currentStorage.includes("Pizza1") || !currentStorage.includes("secondPizza")) {
  pizza3h4.textContent = "Pizza 2"
} if (!currentStorage.includes("Pizza1") && !currentStorage.includes("secondPizza")) {
  pizza3h4.textContent = "Pizza 1"
}

console.log(duplicateTracker)
console.log(localStorage)
