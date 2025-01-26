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
    categories: [Category.Drink, Category.Hot, Category.Coffee],
  },
  {
    name: "K - Coffee 10oz",
    imageUrl: "images/menu-items/k-coffee-10oz.jpg",
    price: 3.00,
    categories: [Category.Drink, Category.Hot, Category.Coffee],
  },
  {
    name: "Vanilla Latte",
    imageUrl: "images/menu-items/vanilla-latte.jpg",
    price: 5.50,
    categories: [Category.Drink, Category.Hot, Category.Coffee],
  },
  {
    name: "Caramel Latte",
    imageUrl: "images/menu-items/caramel-latte.jpg",
    price: 5.50,
    categories: [Category.Drink, Category.Hot, Category.Coffee],
  },
  {
    name: "Sweet Milk Latte",
    imageUrl: "images/menu-items/sweet-milk-latte.jpg",
    price: 5.50,
    categories: [Category.Drink, Category.Hot, Category.Coffee],  
  },
  {
    name: "Cloud Latte",
    imageUrl: "images/menu-items/cloud-latte.jpg",
    price: 5.50,
    categories: [Category.Drink, Category.Hot, Category.Coffee],
  },
  {
    name: "Blue Ocean Latte",
    imageUrl: "images/menu-items/blue-ocean-latte.jpg",
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
    imageUrl: "images/menu-items/iced-americano.jpg",
    price: 3.50,
    categories: [Category.Drink, Category.Iced, Category.Coffee],
  },
  {
    name: "Iced K - Coffee 16oz",
    imageUrl: "images/menu-items/iced-k-coffee-16oz.jpg",
    price: 3.50,
    categories: [Category.Drink, Category.Iced, Category.Coffee],
  },
  {
    name: "Iced Vanilla Latte",
    imageUrl: "images/menu-items/iced-vanilla-latte.jpg",
    price: 6.00,
    categories: [Category.Drink, Category.Iced, Category.Coffee],
  },
  {
    name: "Iced Caramel Latte",
    imageUrl: "images/menu-items/iced-caramel-latte.jpg",
    price: 6.00,
    categories: [Category.Drink, Category.Iced, Category.Coffee],
  },
  {
    name: "Iced Sweet Milk Latte",
    imageUrl: "images/menu-items/iced-sweet-milk-latte.jpg",
    price: 6.00,
    categories: [Category.Drink, Category.Iced, Category.Coffee],  
  },
  {
    name: "Iced Cloud Latte",
    imageUrl: "images/menu-items/iced-cloud-latte.jpg",
    price: 6.00,
    categories: [Category.Drink, Category.Iced, Category.Coffee],
  },
  {
    name: "Iced Blue Ocean Latte",
    imageUrl: "images/menu-items/iced-blue-ocean-latte.jpg",
    price: 6.50,
    categories: [Category.Drink, Category.Iced, Category.Coffee],
  },
  {
    name: "Iced Haru Signature Latte",
    imageUrl: "images/menu-items/iced-haru-signature-latte.jpg",
    price: 6.50,
    categories: [Category.Drink, Category.Iced, Category.Coffee],
    isFavorite: true,
  },
  //#endregion
  
  //#region hot non coffee
  {
    name: "Hot Matcha Latte",
    imageUrl: "images/menu-items/matcha-latte.jpg",
    price: 6.00,
    categories: [Category.Drink, Category.Hot, Category.NonCoffee],
  },
  {
    name: "Hot Yuja Matcha Latte",
    imageUrl: "images/menu-items/yuja-matcha-latte.jpg",
    price: 6.50,
    categories: [Category.Drink, Category.Hot, Category.NonCoffee],
  },
  //#endregion

  //#region iced non coffee
  {
    name: "Peach Iced Tea",
    imageUrl: "images/menu-items/icedmatcha-latte.jpg",
    price: 4.50,
    categories: [Category.Drink, Category.Iced, Category.NonCoffee],
  },
  {
    name: "Iced Choco Latte",
    imageUrl: "images/menu-items/iced-matcha-latte.jpg",
    price: 5.50,
    categories: [Category.Drink, Category.Iced, Category.NonCoffee],
  },
  {
    name: "Iced Strawberry Latte",
    imageUrl: "images/menu-items/iced-strawberry-latte.jpg",
    price: 6.00,
    categories: [Category.Drink, Category.Iced, Category.NonCoffee],
  },
  {
    name: "Iced Blueberry Latte",
    imageUrl: "images/menu-items/iced-blueberry-latte.jpg",
    price: 6.50,
    categories: [Category.Drink, Category.Iced, Category.NonCoffee],
  },
  {
    name: "Iced Matcha Latte",
    imageUrl: "images/menu-items/iced-matcha-latte.jpg",
    price: 6.50,
    categories: [Category.Drink, Category.Iced, Category.NonCoffee],
  },
  {
    name: "Iced Choco Strawberry Delight",
    imageUrl: "images/menu-items/iced-choco-strawberry-delight.jpg",
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
    imageUrl: "images/menu-items/berry-lemonade.jpg",
    price: 6.00,
    categories: [Category.Drink, Category.Iced, Category.Ade],
  },
  //#endregion

  //#region seasonal
  {
    name: "Iced Spring Latte",
    imageUrl: "images/menu-items/iced-spring-latte.jpg",
    price: 6.50,
    categories: [Category.Drink, Category.Iced, Category.Seasonal, Category.Coffee],
  },
  {
    name: "Summer Red Sparkling what is this lol",
    imageUrl: "images/menu-items/summer-red-sparkling.jpg",
    price: 6.50,
    categories: [Category.Drink, Category.Seasonal],
  },
  {
    name: "Fall Pumpkin Spice Latte",
    imageUrl: "images/menu-items/fall-pumpkin-spice-latte.jpg",
    price: 5.50,
    categories: [Category.Drink, Category.Hot, Category.Coffee, Category.Seasonal],
  },
  {
    name: "Winter Hot Chocolate",
    imageUrl: "images/menu-items/winter-hot-chocolate.jpg",
    price: 4.50,
    categories: [Category.Drink, Category.Hot, Category.NonCoffee, Category.Seasonal],
  },
  //#endregion

  //#region hot tea
  {
    name: "Green Tea",
    imageUrl: "images/menu-items/green-tea.jpg",
    price: 3.50,
    categories: [Category.Drink, Category.Hot, Category.Tea],
  },
  {
    name: "Yuja Tea",
    imageUrl: "images/menu-items/yuja-tea.jpg",
    price: 4.00,
    categories: [Category.Drink, Category.Hot, Category.Tea],
  },
  {
    name: "Ginger Tea",
    imageUrl: "images/menu-items/ginger-tea.jpg",
    price: 4.00,
    categories: [Category.Drink, Category.Hot, Category.Tea],
  },
  {
    name: "Jujube Tea",
    imageUrl: "images/menu-items/jujube-tea.jpg",
    price: 4.50,
    categories: [Category.Drink, Category.Hot, Category.Tea],
  },
  //#endregion
];