import { Category } from "models/Categories";
import { IMenuItem } from "models/IMenuItem";

export const MENU_ITEMS: IMenuItem[] = [
  //#region single flavor juices
  {
    name: "Watermelon",
    imageUrl: "images/menu-items/watermelon-juice.jpg",
    description: "A refreshing drink made from fresh watermelon.",
    price: 6.50,
    categories: [Category.Drink, Category.Juice, Category.SingleFlavor],
  },
  {
    name: "Grapefruit",
    imageUrl: "images/menu-items/grapefruit-juice.jpg",
    description: "A tangy and refreshing drink made from fresh grapefruit.",
    price: 6.00,
    categories: [Category.Drink, Category.Juice, Category.SingleFlavor],
  },
  {
    name: "Mango",
    imageUrl: "images/menu-items/mango-juice.jpg",
    description: "A sweet and tropical drink made from fresh mangoes.",
    price: 6.50,
    categories: [Category.Drink, Category.Juice, Category.SingleFlavor],
  },
  {
    name: "Orange",
    imageUrl: "images/menu-items/orange-juice.jpg",
    description: "A classic breakfast drink made from fresh oranges.",
    price: 6.00,
    categories: [Category.Drink, Category.Juice, Category.SingleFlavor],
  },
  //#endregion
  
  //#region mixed flavor juices
  {
    name: "Berry Lover Juice",
    imageUrl: "images/menu-items/berry-lover-juice.jpg",
    description: "A delicious blend of strawberries, blackberries, and raspberries.",
    price: 7.50,
    categories: [Category.Drink, Category.Juice, Category.MixedFlavor],
    isFavorite: true,
  },
  {
    name: "Watermelon + Pineapple",
    imageUrl: "images/menu-items/watermelon-pineapple-juice.jpg",
    description: "A tropical blend of watermelon and pineapple juices.",
    price: 6.90,
    categories: [Category.Drink, Category.Juice, Category.MixedFlavor],
  },
  {
    name: "Strawberry + Kiwi",
    imageUrl: "images/menu-items/strawberry-kiwi-juice.jpg",
    description: "",
    price: 6.50,
    categories: [Category.Drink, Category.Juice, Category.MixedFlavor],
  },
  {
    name: "Strawberry + Banana",
    imageUrl: "images/menu-items/strawberry-banana-juice.jpg",
    description: "",
    price: 6.00,
    categories: [Category.Drink, Category.Juice, Category.MixedFlavor],
  },
  {
    name: "Kiwi + Banana",
    imageUrl: "images/menu-items/watermelon-pineapple-juice.jpg",
    description: "",
    price: 6.50,
    categories: [Category.Drink, Category.Juice, Category.MixedFlavor],
  },
  {
    name: "Orange + Pineapple",
    imageUrl: "images/menu-items/orange-pineapple-juice.jpg",
    description: "",
    price: 7.50,
    categories: [Category.Drink, Category.Juice, Category.MixedFlavor],
  },
  {
    name: "Orange + Grapefruit",
    imageUrl: "images/menu-items/orange-grapefruit-juice.jpg",
    description: "",
    price: 6.50,
    categories: [Category.Drink, Category.Juice, Category.MixedFlavor],
  },
  //#endregion

  //#region sandwiches
  {
    name: "Ham & Egg Sandwich",
    imageUrl: "images/menu-items/ham-egg-sandwich.jpg",
    description: "Ham, boiled egg, cheese, lettuce, and tomato with sandwich sauce",
    price: 8.50,
    categories: [Category.Food, Category.Sandwich],
  },
  {
    name: "Chicken Sandwich",
    imageUrl: "images/menu-items/chicken-sandwich.jpg",
    description: "Grilled chicken, cheese, lettuce, and tomato with chili and sandwich sauce",
    price: 8.50,
    categories: [Category.Food, Category.Sandwich],
  },
  {
    name: "Spicy Tuna Sandwich",
    imageUrl: "images/menu-items/spicy-tuna-sandwich.jpg",
    description: "Tuna, jalapeno onion, lettuce, and tomatoes",
    price: 8.50,
    categories: [Category.Food, Category.Sandwich],
  },
  {
    name: "Chicken Guacamole Sandwich",
    imageUrl: "images/menu-items/chicken-guacamole-sandwich.jpg",
    description: "Grilled chicken and guacamole with chickpeas mayo",
    price: 9.50,
    categories: [Category.Food, Category.Sandwich],
  },
  {
    name: "Shrimp Guacamole Sandwich",
    imageUrl: "images/menu-items/shrimp-guacamole-sandwich.jpg",
    description: "Shrimp and guacamole with chickpeas mayo",
    price: 9.50,
    categories: [Category.Food, Category.Sandwich],
  },
  //#endregion

  //#region mini pizzas
  {
    name: "Cheese Pizza",
    imageUrl: "images/menu-items/cheese-pizza.jpg",
    description: "Pita bread, pizza sauce, mozzarella cheese",
    price: 6.50,
    categories: [Category.Food, Category.MiniPizza],
  },
  {
    name: "Margherita Pizza",
    imageUrl: "images/menu-items/margherita-pizza.jpg",
    description: "Pita bread, spinach, tomato, honey, and mozzarella cheese",
    price: 7.50,
    categories: [Category.Food, Category.MiniPizza],
  },
  {
    name: "Pepperoni Pizza",
    imageUrl: "images/menu-items/pepperoni-pizza.jpg",
    description: "Pita bread, pizza sauce, pepperoni, and mozzarella cheese",
    price: 7.50,
    categories: [Category.Food, Category.MiniPizza],
  },
  {
    name: "Jeju Pizza",
    imageUrl: "images/menu-items/jeju-pizza.jpg",
    description: "Pita bread, ham, pineapple, mandarin orange, jalapeno, and mozarrella cheese",
    price: 8.50,
    categories: [Category.Food, Category.MiniPizza],
  },
  {
    name: "Sweet Potato Mousse Pizza 9\"",
    imageUrl: "images/menu-items/jeju-pizza.jpg",
    description: "Thin pita bread, bacon, corn, sweet potato mousse, and mozarrella cheese",
    price: 9.50,
    categories: [Category.Food, Category.MiniPizza],
    isFavorite: true,
  },
  //#endregion

  //#region bakery
  {
    name: "Muffin",
    imageUrl: "images/menu-items/muffin.jpg",
    description: "Chocolate, blueberry, or banana",
    price: 1.90,
    categories: [Category.Food, Category.Bakery],
  },
  {
    name: "Honey Butter Croissant",
    imageUrl: "images/menu-items/honey-butter-croissant.jpg",
    description: "Butter, honey strawberry, and whipping cream", 
    price: 5.50,
    categories: [Category.Food, Category.Bakery],
  },
  {
    name: "Honey Bread",
    imageUrl: "images/menu-items/honey-bread.jpg",
    description: "Bread, butter, whipping cream, strawberry, blueberry, and honey", 
    price: 5.50,
    categories: [Category.Food, Category.Bakery],
  },
  {
    name: "K - Garlic Bread",
    imageUrl: "images/menu-items/k-garlic-bread.jpg",
    description: "Butter, minced garlic, sugar, condensed milk, and parsley", 
    price: 4.50,
    categories: [Category.Food, Category.Bakery],
  },
  {
    name: "Potato Blanket Toast",
    imageUrl: "images/menu-items/potato-blanket.jpg",
    description: "", 
    price: 5.90,
    categories: [Category.Food, Category.Bakery],
    isActive: false,
  },
  {
    name: "Sausage In Garlic Bread",
    imageUrl: "images/menu-items/sausage-in-garlic-bread.jpg",
    description: "", 
    price: 5.90,
    categories: [Category.Food, Category.Bakery],
    isFavorite: true,
  },
  //#endregion

  //#region snacks
  {
    name: "Glazed Banana",
    imageUrl: "images/menu-items/glazed-banana.jpg",
    price: 4.50,
    categories: [Category.Food, Category.Snack],
    isActive: false,
  },
  {
    name: "K - Corn Dog",
    imageUrl: "images/menu-items/k-corn-dog.jpg",
    price: 5.00,
    categories: [Category.Food, Category.Snack],
  },
  {
    name: "Strawberry Mochi",
    imageUrl: "images/menu-items/strawberry-mochi.jpg",
    price: 6.50,
    categories: [Category.Food, Category.Snack],
  },
  {
    name: "Tropical Fruits",
    imageUrl: "images/menu-items/tropical-fruits.jpg",
    price: 7.90,
    categories: [Category.Food, Category.Snack],
  },
  //#endregion

  //#region hot coffee
  {
    name: "Americano",
    imageUrl: "images/menu-items/americano.jpg",
    price: 3.00,
    categories: [Category.Food, Category.HotCoffee],
  },
  {
    name: "K - Coffee 10oz",
    imageUrl: "images/menu-items/k-coffee-10oz.jpg",
    price: 3.00,
    categories: [Category.Food, Category.HotCoffee],
  },
  {
    name: "Vanilla Latte",
    imageUrl: "images/menu-items/vanilla-latte.jpg",
    price: 5.50,
    categories: [Category.Food, Category.HotCoffee],
  },
  {
    name: "Caramel Latte",
    imageUrl: "images/menu-items/caramel-latte.jpg",
    price: 5.50,
    categories: [Category.Food, Category.HotCoffee],
  },
  {
    name: "Sweet Milk Latte",
    imageUrl: "images/menu-items/sweet-milk-latte.jpg",
    price: 5.50,
    categories: [Category.Food, Category.HotCoffee],  
  },
  {
    name: "Cloud Latte",
    imageUrl: "images/menu-items/cloud-latte.jpg",
    price: 5.50,
    categories: [Category.Food, Category.HotCoffee],
  },
  {
    name: "Blue Ocean Latte",
    imageUrl: "images/menu-items/blue-ocean-latte.jpg",
    price: 6.00,
    categories: [Category.Food, Category.HotCoffee],
  },
  {
    name: "Haru Signature Latte",
    imageUrl: "images/menu-items/haru-signature-latte.jpg",
    price: 6.00,
    categories: [Category.Food, Category.HotCoffee],
    isFavorite: true,
  },
  //#endregion
  
  //
  {
    name: "Chicken Tenders",
    imageUrl: "images/menu-items/https://www.pngitem",
    description: "Crispy chicken tenders served with your choice of dipping sauce.",
    price: 7.99,
  },
  {
    name: "Caesar Salad",
    imageUrl: "images/menu-items/https://www.pngitem",
    description: "A classic Caesar salad with romaine lettuce, croutons, and parmesan cheese.",
    price: 5.99,
  },
  {
    name: "Chocolate Cake",
    imageUrl: "images/menu-items/https://www.pngitem",
    description: "A rich, decadent chocolate cake topped with chocolate frosting.",
    price: 4.99,
  },
  {
    name: "Apple Pie",
    imageUrl: "images/menu-items/https://www.pngitem",
    description: "A delicious apple pie with a flaky crust and cinnamon-spiced filling.",
    price: 3.99,
  },
  {
    name: "Vanilla Ice Cream",
    imageUrl: "images/menu-items/https://www.pngitem",
    description: "Creamy vanilla ice cream served in a waffle cone.",
    price: 2.99,
  },
  {
    name: "Coca-Cola",
    imageUrl: "images/menu-items/https://www.pngitem",
    description: "A refreshing Coca-Cola served over ice.",
    price: 1.99,
  },
  {
    name: "Iced Tea",
    imageUrl: "images/menu-items/https://www.pngitem",
    description: "A cool glass of iced tea with a lemon wedge.",
    price: 1.99,
  },
  {
    name: "Coffee",
    imageUrl: "images/menu-items/https://www.pngitem",
    description: "A steaming cup of coffee with cream and sugar.",
    price: 1.99,
  },
  {
    name: "Margarita",
    imageUrl: "images/menu-items/https://www.pngitem",
    description: "A classic margarita with tequila, triple sec, and lime juice.",
    price: 7.99,
  },
  {
    name: "Mojito",
    imageUrl: "images/menu-items/https://www.pngitem",
    description: "A refreshing mojito with rum, mint, lime, and soda water.",
    price: 7.99,
  },
  {
    name: "Mai Tai",
    imageUrl: "images/menu-items/https://www.pngitem",
    description: "A tropical mai tai with rum, orange curaçao, and lime juice.",
    price: 7.99,
  }
];