// import coffee menu from cofee_data.js
const coffeeMenu = require("./coffee_data.js");
// test print
//console.log(coffeeMenu);

// drink menu
function drinks(menu) {
  console.log("\nCoffee Menu:\n");
  menu.forEach((element) => {
    console.log(element.name);
  });
}

// drinks $5 and less
function coffeeFiveOrBelow(PriceMenu) {
  console.log("\nCoffee Drinks $5 or less:\n");
  // for each coffee drink check price to filter for target price
  PriceMenu.forEach((element) => {
    if (element.price <= 5) {
      console.log(element.name + "\t" + "$" + element.price);
    }
  });
}

// drinks priced even number
function coffeePriceEven(PriceMenu) {
  console.log("\nCoffee Drinks priced at even number:\n");
  // for each coffee drink check price to filter for target price
  PriceMenu.forEach((element) => {
    if (element.price % 2 === 0) {
      console.log(element.name + "\t$" + element.price);
    }
  });
}

// cost of ordering all drinks
function coffeeGetmAll(PriceMenu) {
  //initialize variable
  let total = 0;

  // for each coffee drink check price to filter for target price
  PriceMenu.forEach((element) => {
    // add to calculate total menu price
    total += element.price;
  });
  // display total price for ordering one of each drink
  console.log("\nGet one of each Coffee Drink for " + "Total of $" + total);
}

// list of seasonal coffee
function coffeeSeasonal(menu, comment) {
  // check if seasonal
  menu.forEach((element) => {
    if (element.seasonal) {
      console.log(element.name + comment + "\t$" + element.price);
    }
  });
}

// list all coffee drinks on menu
drinks(coffeeMenu);
console.log("\n");

// list of coffee drings $5 or less
coffeeFiveOrBelow(coffeeMenu);
console.log("\n");

// Drinks priced even number
coffeePriceEven(coffeeMenu);
console.log("\n");

// display total when getting one of each drink on the menu
coffeeGetmAll(coffeeMenu);
console.log("\n");

// seasonal drinks
coffeeSeasonal(coffeeMenu, "");
console.log("\n");

// seasonal drinks with added comment
coffeeSeasonal(coffeeMenu, "\twith imported beans");
console.log("\n");
