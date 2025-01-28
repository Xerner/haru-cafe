import { Category } from "models/Categories";
import { IMenuItem } from "models/IMenuItem";

export const MENU_ITEMS: IMenuItem[] = [
  //#region single flavor juices
  {
    name: "Watermelon",
    description: "A refreshing drink made from fresh watermelon.",
    price: 6.50,
    categories: [Category.Drink, Category.Juice, Category.SingleFlavor],
  },
  {
    name: "Grapefruit",
    description: "A tangy and refreshing drink made from fresh grapefruit.",
    price: 6.00,
    categories: [Category.Drink, Category.Juice, Category.SingleFlavor],
  },
  {
    name: "Mango",
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
    description: "",
    price: 6.00,
    categories: [Category.Drink, Category.Juice, Category.MixedFlavor],
  },
  {
    name: "Kiwi + Banana",
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
    description: "Pita bread, pizza sauce, mozzarella cheese",
    price: 6.50,
    categories: [Category.Food, Category.MiniPizza],
  },
  {
    name: "Margherita Pizza",
    imageUrl: "images/menu-items/7-in-margherita-pizza.jpg",
    description: "Pita bread, spinach, tomato, honey, and mozzarella cheese",
    price: 7.50,
    categories: [Category.Food, Category.MiniPizza],
  },
  {
    name: "Pepperoni Pizza",
    description: "Pita bread, pizza sauce, pepperoni, and mozzarella cheese",
    price: 7.50,
    categories: [Category.Food, Category.MiniPizza],
  },
  {
    name: "Jeju Pizza",
    imageUrl: "images/menu-items/7-in-jeju-pizza.jpg",
    description: "Pita bread, ham, pineapple, mandarin orange, jalapeno, and mozarrella cheese",
    price: 8.50,
    categories: [Category.Food, Category.MiniPizza],
  },
  {
    name: "Sweet Potato Mousse Pizza 9\"",
    description: "Thin pita bread, bacon, corn, sweet potato mousse, and mozarrella cheese",
    price: 9.50,
    categories: [Category.Food, Category.MiniPizza],
    isFavorite: true,
  },
  //#endregion

  //#region bakery
  {
    name: "Chocolate Muffin", 
    // imageUrl: "images/menu-items/muffin.jpg",
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
    price: 7.90,
    categories: [Category.Food, Category.Snack],
  },
  //#endregion

  //#region hot coffee
  {
    name: "Americano",
    price: 3.00,
    categories: [Category.Drink, Category.Hot, Category.Coffee],
  },
  {
    name: "K - Coffee 10oz",
    price: 3.00,
    categories: [Category.Drink, Category.Hot, Category.Coffee],
  },
  {
    name: "Vanilla Latte",
    price: 5.50,
    categories: [Category.Drink, Category.Hot, Category.Coffee],
  },
  {
    name: "Caramel Latte",
    price: 5.50,
    categories: [Category.Drink, Category.Hot, Category.Coffee],
  },
  {
    name: "Sweet Milk Latte",
    price: 5.50,
    categories: [Category.Drink, Category.Hot, Category.Coffee],  
  },
  {
    name: "Cloud Latte",
    price: 5.50,
    categories: [Category.Drink, Category.Hot, Category.Coffee],
  },
  {
    name: "Blue Ocean Latte",
    price: 6.00,
    categories: [Category.Drink, Category.Hot, Category.Coffee],
  },
  {
    name: "Haru Signature Latte",
    imageUrl: "images/menu-items/haru-signature-latte.jpg",
    price: 6.00,
    categories: [Category.Drink, Category.Hot, Category.Coffee],
    isFavorite: true,
  },
  //#endregion

  //#region cold coffee
  {
    name: "Iced Americano",
    price: 3.50,
    categories: [Category.Drink, Category.Iced, Category.Coffee],
  },
  {
    name: "Iced K - Coffee 16oz",
    price: 3.50,
    categories: [Category.Drink, Category.Iced, Category.Coffee],
  },
  {
    name: "Iced Vanilla Latte",
    price: 6.00,
    categories: [Category.Drink, Category.Iced, Category.Coffee],
  },
  {
    name: "Iced Caramel Latte",
    price: 6.00,
    categories: [Category.Drink, Category.Iced, Category.Coffee],
  },
  {
    name: "Iced Sweet Milk Latte",
    price: 6.00,
    categories: [Category.Drink, Category.Iced, Category.Coffee],  
  },
  {
    name: "Iced Cloud Latte",
    price: 6.00,
    categories: [Category.Drink, Category.Iced, Category.Coffee],
  },
  {
    name: "Iced Blue Ocean Latte",
    price: 6.50,
    categories: [Category.Drink, Category.Iced, Category.Coffee],
  },
  {
    name: "Iced Haru Signature Latte",
    price: 6.50,
    categories: [Category.Drink, Category.Iced, Category.Coffee],
    isFavorite: true,
  },
  //#endregion
  
  //#region hot non coffee
  {
    name: "Hot Matcha Latte",
    price: 6.00,
    categories: [Category.Drink, Category.Hot, Category.NonCoffee],
  },
  {
    name: "Hot Yuja Matcha Latte",
    price: 6.50,
    categories: [Category.Drink, Category.Hot, Category.NonCoffee],
  },
  //#endregion

  //#region iced non coffee
  {
    name: "Peach Iced Tea",
    price: 4.50,
    categories: [Category.Drink, Category.Iced, Category.NonCoffee],
  },
  {
    name: "Iced Choco Latte",
    price: 5.50,
    categories: [Category.Drink, Category.Iced, Category.NonCoffee],
  },
  {
    name: "Iced Strawberry Latte",
    price: 6.00,
    categories: [Category.Drink, Category.Iced, Category.NonCoffee],
  },
  {
    name: "Iced Blueberry Latte",
    price: 6.50,
    categories: [Category.Drink, Category.Iced, Category.NonCoffee],
  },
  {
    name: "Iced Matcha Latte",
    price: 6.50,
    categories: [Category.Drink, Category.Iced, Category.NonCoffee],
  },
  {
    name: "Iced Choco Strawberry Delight",
    price: 6.90,
    categories: [Category.Drink, Category.Iced, Category.NonCoffee],
  },
  //#endregion

  //#region ade
  {
    name: "Blood Lemonade",
    imageUrl: "images/menu-items/blood-lemonade.jpg",
    price: 5.00,
    categories: [Category.Drink, Category.Iced, Category.Ade],
  },
  {
    name: "Aurora Lemonade",
    imageUrl: "images/menu-items/aurora-lemonade.jpg",
    price: 5.50,
    categories: [Category.Drink, Category.Iced, Category.Ade],
    isFavorite: true,
  },
  {
    name: "Twilight Blueberry-ade",
    imageUrl: "images/menu-items/twilight-blueberry-ade.jpg",
    price: 5.90,
    categories: [Category.Drink, Category.Iced, Category.Ade],
  },
  {
    name: "Berry Lemonade",
    price: 6.00,
    categories: [Category.Drink, Category.Iced, Category.Ade],
  },
  //#endregion

  //#region seasonal
  {
    name: "Iced Spring Latte",
    price: 6.50,
    categories: [Category.Drink, Category.Iced, Category.Seasonal, Category.Coffee],
  },
  {
    name: "Summer Red Sparkling",
    price: 6.50,
    categories: [Category.Drink, Category.Seasonal],
  },
  {
    name: "Fall Pumpkin Spice Latte",
    price: 5.50,
    categories: [Category.Drink, Category.Hot, Category.Coffee, Category.Seasonal],
  },
  {
    name: "Winter Hot Chocolate",
    price: 4.50,
    categories: [Category.Drink, Category.Hot, Category.NonCoffee, Category.Seasonal],
  },
  //#endregion

  //#region hot tea
  {
    name: "Green Tea",
    price: 3.50,
    categories: [Category.Drink, Category.Hot, Category.Tea],
  },
  {
    name: "Yuja Tea",
    price: 4.00,
    categories: [Category.Drink, Category.Hot, Category.Tea],
  },
  {
    name: "Ginger Tea",
    price: 4.00,
    categories: [Category.Drink, Category.Hot, Category.Tea],
  },
  {
    name: "Jujube Tea",
    price: 4.50,
    categories: [Category.Drink, Category.Hot, Category.Tea],
  },
  //#endregion
];