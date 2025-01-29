import { Category } from "models/Categories";
import { IMenuItem } from "models/interfaces/IMenuItem";

export const MENU_ITEMS: IMenuItem[] = [
  //#region single flavor juices
  {
    name: "Watermelon Juice",
    description: "A refreshing drink made from fresh watermelon.",
    price: 7.00,
    categories: [Category.Drink, Category.Juice, Category.SingleFlavor],
  },
  {
    name: "Grapefruit Juice",
    description: "A tangy and refreshing drink made from fresh grapefruit.",
    price: 6.50,
    categories: [Category.Drink, Category.Juice, Category.SingleFlavor],
  },
  {
    name: "Mango Juice",
    description: "A sweet and tropical drink made from fresh mangoes.",
    price: 7.00,
    categories: [Category.Drink, Category.Juice, Category.SingleFlavor],
  },
  {
    name: "Orange Juice",
    imageUrl: "images/menu-items/orange-juice.jpg",
    description: "A classic breakfast drink made from fresh oranges.",
    price: 6.50,
    categories: [Category.Drink, Category.Juice, Category.SingleFlavor],
  },
  //#endregion
  
  //#region mixed flavor juices
  {
    name: "Berry Lover Juice",
    imageUrl: "images/menu-items/berry-lover-juice.jpg",
    description: "A delicious blend of strawberries, blackberries, and raspberries.",
    price: 7.90,
    categories: [Category.Drink, Category.Juice, Category.MixedFlavor],
    isFavorite: true,
  },
  {
    name: "Watermelon + Pineapple Juice",
    description: "A tropical blend of watermelon and pineapple juices.",
    price: 7.50,
    categories: [Category.Drink, Category.Juice, Category.MixedFlavor],
  },
  {
    name: "Strawberry + Kiwi Juice",
    imageUrl: "images/menu-items/strawberry-kiwi-juice.jpg",
    description: "A sweet and tangy blend of strawberries and kiwis.",
    price: 6.90,
    categories: [Category.Drink, Category.Juice, Category.MixedFlavor],
  },
  {
    name: "Strawberry + Banana Juice",
    description: "A creamy and fruity blend of strawberries and bananas.",
    price: 6.50,
    categories: [Category.Drink, Category.Juice, Category.MixedFlavor],
  },
  {
    name: "Kiwi + Banana Juice",
    description: "A tropical blend of kiwis and bananas.",
    price: 6.90,
    categories: [Category.Drink, Category.Juice, Category.MixedFlavor],
  },
  {
    name: "Orange + Pineapple Juice",
    imageUrl: "images/menu-items/orange-pineapple-juice.jpg",
    description: "A tropical blend of oranges and pineapples",
    price: 6.90,
    categories: [Category.Drink, Category.Juice, Category.MixedFlavor],
  },
  {
    name: "Orange + Grapefruit Juice",
    description: "A tangy and refreshing blend of oranges and grapefruit.",
    price: 6.90,
    categories: [Category.Drink, Category.Juice, Category.MixedFlavor],
  },
  //#endregion

  //#region sandwiches
  {
    name: "Ham & Egg Sandwich",
    imageUrl: "images/menu-items/ham-egg-sandwich.jpg",
    description: "Ham, boiled egg, american cheese, lettuce, and tomato with homemade sandwich sauce",
    price: 9.00,
    categories: [Category.Food, Category.Sandwich],
  },
  {
    name: "Chicken Sandwich",
    imageUrl: "images/menu-items/chicken-sandwich.jpg",
    description: "Grilled chicken, american cheese, lettuce, and tomato with chili and homemade sandwich sauce",
    price: 9.50,
    categories: [Category.Food, Category.Sandwich],
  },
  {
    name: "Spicy Tuna Sandwich",
    imageUrl: "images/menu-items/spicy-tuna-sandwich.jpg",
    description: "Tuna, jalapeno onion, lettuce, and tomatoes",
    price: 9.00,
    categories: [Category.Food, Category.Sandwich],
  },
  {
    name: "Chicken Guacamole Sandwich",
    description: "Grilled chicken, guacamole, and chickpea mayo",
    price: 10.50,
    categories: [Category.Food, Category.Sandwich],
  },
  {
    name: "Shrimp Guacamole Sandwich",
    imageUrl: "images/menu-items/shrimp-guacamole-sandwich.jpg",
    description: "Shrimp, guacamole, and chickpea mayo",
    price: 10.50,
    categories: [Category.Food, Category.Sandwich],
  },
  //#endregion

  //#region mini pizzas
  {
    name: "7\" Cheese Pizza",
    description: "Pita bread, pizza sauce, mozzarella cheese",
    price: 6.90,
    categories: [Category.Food, Category.MiniPizza],
  },
  {
    name: "7\" Margherita Pizza",
    imageUrl: "images/menu-items/7-in-margherita-pizza.jpg",
    description: "Pita bread, spinach, tomato, honey, and mozzarella cheese",
    price: 7.90,
    categories: [Category.Food, Category.MiniPizza],
  },
  {
    name: "7\" Pepperoni Pizza",
    description: "Pita bread, pizza sauce, pepperoni, and mozzarella cheese",
    price: 7.90,
    categories: [Category.Food, Category.MiniPizza],
  },
  {
    name: "7\" Jeju Pizza",
    imageUrl: "images/menu-items/7-in-jeju-pizza.jpg",
    description: "Pita bread, ham, pineapple, mandarin orange, jalapeno, and mozarrella cheese",
    price: 8.90,
    categories: [Category.Food, Category.MiniPizza],
  },
  {
    name: "9\" Sweet Potato Mousse Pizza",
    description: "Thin pita bread, bacon, corn, sweet potato mousse, and mozarrella cheese",
    price: 10.50,
    categories: [Category.Food, Category.MiniPizza],
    isFavorite: true,
  },
  //#endregion

  //#region bakery
  {
    name: "Chocolate Muffin", 
    price: 1.90,
    categories: [Category.Food, Category.Bakery],
  },
  {
    name: "Honey Butter Croissant",
    imageUrl: "images/menu-items/honey-butter-croissant.jpg",
    description: "Butter, honey, strawberry, and whipping cream", 
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
    price: 4.90,
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
    description: " Chicken sausage inside homemade garlic bread with american cheese", 
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
    description: "Chicken sausage fried in corn dog batter with ketchup and mustard",
    price: 5.50,
    categories: [Category.Food, Category.Snack],
  },
  {
    name: "Strawberry Mochi",
    imageUrl: "images/menu-items/strawberry-mochi.jpg",
    description: "Mochi, red bean paste, and strawberry",
    price: 6.50,
    categories: [Category.Food, Category.Snack],
  },
  {
    name: "Strawberry Flavored Mochi Ice Cream",
    description: "Strawberry ice cream inside mochi with strawberry slices, and a chocolate drizzle.",
    price: 3.90,
    categories: [Category.Food, Category.Snack],
  },
  {
    name: "Green Tea Flavored Mochi Ice Cream",
    description: "Green tea ice cream inside mochi with kiwi slices, and a chocolate drizzle.",
    price: 3.90,
    categories: [Category.Food, Category.Snack],
  },
  //#endregion

  //#region hot coffee
  {
    name: "Americano",
    description: "2 shots of expresso with water",
    price: 3.50,
    categories: [Category.Drink, Category.Hot, Category.Coffee],
  },
  {
    name: "K - Coffee 10oz",
    description: "Sweet Korean mixed coffee",
    price: 3.50,
    categories: [Category.Drink, Category.Hot, Category.Coffee],
  },
  {
    name: "Vanilla Latte",
    description: "2 shots of expresso with steamed milk and vanilla syrup",
    price: 6.00,
    categories: [Category.Drink, Category.Hot, Category.Coffee],
  },
  {
    name: "Caramel Latte",
    description: "2 shots of expresso with steamed milk and caramel syrup",
    price: 6.00,
    categories: [Category.Drink, Category.Hot, Category.Coffee],
  },
  {
    name: "Sweet Milk Latte",
    description: "2 shots of expresso with steamed and condensed milk",
    price: 6.00,
    categories: [Category.Drink, Category.Hot, Category.Coffee],  
  },
  {
    name: "Cloud Latte",
    description: "Sweet Korean mixed coffee with steamed milk and a cloud of whipped steamed milk on top",
    price: 6.00,
    categories: [Category.Drink, Category.Hot, Category.Coffee],
  },
  {
    name: "Blue Ocean Latte",
    description: "2 shots of expresso with steamed milk, condensed milk, and blue curacao syrup",
    price: 6.50,
    categories: [Category.Drink, Category.Hot, Category.Coffee],
  },
  {
    name: "Haru Signature Latte",
    imageUrl: "images/menu-items/haru-signature-latte.jpg",
    description: "2 shots of expresso with steamed milk and homemade orange syrup",
    price: 6.50,
    categories: [Category.Drink, Category.Hot, Category.Coffee],
    isFavorite: true,
  },
  {
    name: "Expresso",
    description: "2 shots of expresso",
    price: 3.00,
    categories: [Category.Drink, Category.Hot, Category.Coffee],
  },
  {
    name: "Orange Expresso",
    description: "2 shots of expresso with homemade orange syrup",
    price: 3.50,
    categories: [Category.Drink, Category.Hot, Category.Coffee],
  },
  {
    name: "Cafe Latte",
    description: "2 shots of expresso with non-sweet steamed milk",
    price: 4.00,
    categories: [Category.Drink, Category.Hot, Category.Coffee],
  },
  //#endregion

  //#region cold coffee
  {
    name: "Iced Americano",
    description: "3 shots of expresso with water over ice",
    price: 4.00,
    categories: [Category.Drink, Category.Iced, Category.Coffee],
  },
  {
    name: "Iced K - Coffee 16oz",
    description: "Sweet Korean mixed coffee over ice",
    price: 4.00,
    categories: [Category.Drink, Category.Iced, Category.Coffee],
  },
  {
    name: "Iced Vanilla Latte",
    description: "2 shots of expresso with milk, vanilla syrup, and a homemade heavy cream mix over ice",
    price: 6.50,
    categories: [Category.Drink, Category.Iced, Category.Coffee],
  },
  {
    name: "Iced Caramel Latte",
    description: "2 shots of expresso with caramel syrup, whip cream with caramel drizzle, and a homemade heavy cream mix over ice",
    price: 6.50,
    categories: [Category.Drink, Category.Iced, Category.Coffee],
  },
  {
    name: "Iced Sweet Milk Latte",
    description: "2 shots of expresso with condensed milk, a homemade milk mixture, and a homemade heavy cream mix over ice",
    price: 6.50,
    categories: [Category.Drink, Category.Iced, Category.Coffee],  
  },
  {
    name: "Iced Cloud Latte",
    description: "Sweet Korean mixed coffee with steamed milk and a cloud of whipped steamed milk on top over ice",
    price: 6.50,
    categories: [Category.Drink, Category.Iced, Category.Coffee],
  },
  {
    name: "Iced Blue Ocean Latte",
    description: "2 shots of expresso with milk, condensed milk, blue curacao syrup, and a homemade heavy cream mix over ice",
    price: 6.90,
    categories: [Category.Drink, Category.Iced, Category.Coffee],
  },
  {
    name: "Iced Haru Signature Latte",
    description: "2 shots of expresso with homemade orange syrup, and whipped homemade heavy cream mix over ice",
    price: 6.90,
    categories: [Category.Drink, Category.Iced, Category.Coffee],
    isFavorite: true,
  },
  {
    name: "Iced Cafe Latte",
    description: "2 shots of expresso, non-sweet milk, and heavy cream over ice",
    price: 4.50,
    categories: [Category.Drink, Category.Iced, Category.Coffee],
  },
  //#endregion
  
  //#region hot non coffee
  {
    name: "Hot Matcha Latte",
    description: "Hot water, matcha powder, and steamed milk",
    price: 6.50,
    categories: [Category.Drink, Category.Hot, Category.NonCoffee],
  },
  {
    name: "Hot Yuza Matcha Latte",
    description: "Hot water, yuza tea, matcha powder, and steamed milk. Yuza is a citrus fruit from Korea.",
    price: 6.90,
    categories: [Category.Drink, Category.Hot, Category.NonCoffee],
  },
  //#endregion

  //#region iced non coffee
  {
    name: "Peach Iced Tea",
    price: 5.00,
    categories: [Category.Drink, Category.Iced, Category.NonCoffee],
  },
  {
    name: "Iced Choco Latte",
    description: "Homemade chocolate syrup with milk, whipped cream, and a chocolate drizzle on top",
    price: 6.00,
    categories: [Category.Drink, Category.Iced, Category.NonCoffee],
  },
  {
    name: "Iced Strawberry Latte",
    description: "Homemade strawberry syrup with milk, and a whole strawberry on top",
    price: 6.50,
    categories: [Category.Drink, Category.Iced, Category.NonCoffee],
  },
  {
    name: "Iced Blueberry Latte",
    description: "Homemade blueberry syrup with milk, and whole blueberries on top",
    price: 6.90,
    categories: [Category.Drink, Category.Iced, Category.NonCoffee],
  },
  {
    name: "Iced Matcha Latte",
    description: "Matcha powder with milk",
    price: 6.90,
    categories: [Category.Drink, Category.Iced, Category.NonCoffee],
    isFavorite: true,
  },
  {
    name: "Iced Choco Strawberry Delight",
    description: "Strawberry milk, whipped chocolate heavy cream, topped with regular whipped cream and sprinkles",
    price: 7.50,
    categories: [Category.Drink, Category.Iced, Category.NonCoffee],
    isFavorite: true,
  },
  //#endregion

  //#region ade
  {
    name: "Blood Lemonade",
    imageUrl: "images/menu-items/blood-lemonade.jpg",
    description: "Homemade lemon syrup with sparkling water, and blood orange syrup",
    price: 5.00,
    categories: [Category.Drink, Category.Iced, Category.Ade],
  },
  {
    name: "Aurora Lemonade",
    imageUrl: "images/menu-items/aurora-lemonade.jpg",
    description: "Homemade lemon syrup with sparkling water, blue curacao syrup, and butterfly pea powder water",
    price: 5.90,
    categories: [Category.Drink, Category.Iced, Category.Ade],
    isFavorite: true,
  },
  {
    name: "Twilight Blueberry-ade",
    imageUrl: "images/menu-items/twilight-blueberry-ade.jpg",
    description: "Homemade blueberry syrup with sparkling water, blue curacao syrup, and butterfly pea powder water",
    price: 5.90,
    categories: [Category.Drink, Category.Iced, Category.Ade],
  },
  {
    name: "Berry Lemonade",
    description: "Homemade strawberry and lemon syrup, sparkling water, and lemon slices",
    price: 6.50,
    categories: [Category.Drink, Category.Iced, Category.Ade],
  },
  {
    name: "Peach Lemon Tea",
    description: "Peach iced tea with lemonade",
    price: 5.50,
    categories: [Category.Drink, Category.Iced, Category.Ade],
  },
  //#endregion

  //#region seasonal
  {
    name: "Iced Spring Latte",
    description: "Homemade strawberry milk, butterfly pea powder milk, and homemade whipped heavy cream mix",
    price: 6.90,
    categories: [Category.Drink, Category.Iced, Category.Seasonal, Category.Coffee],
  },
  {
    name: "Summer Red Sparkling",
    description: "Cubed watermelon, Sprite, and blood orange syrup",
    price: 6.90,
    categories: [Category.Drink, Category.Seasonal],
  },
  {
    name: "Fall Pumpkin Spice Latte",
    description: "2 shots of expresso, steamed milk, cinnamon powder, pumpkin powder, and topped with whipped cream and more cinnamon powder",
    price: 6.50,
    categories: [Category.Drink, Category.Hot, Category.Coffee, Category.Seasonal],
  },
  {
    name: "Iced Fall Pumpkin Spice Latte",
    description: "2 shots of expresso, milk, pumpkin powder, cinnamon powder, and topped with whipped cream and more cinnamon powder",
    price: 7.00,
    categories: [Category.Drink, Category.Iced, Category.Coffee, Category.Seasonal],
  },
  {
    name: "Winter Hot Chocolate",
    description: "Homemade chocolate syrup, steamed milk, topped with one marshmallow and chocolate powder",
    price: 5.00,
    categories: [Category.Drink, Category.Hot, Category.NonCoffee, Category.Seasonal],
  },
  //#endregion

  //#region hot tea
  {
    name: "Green Tea",
    description: "",
    price: 3.90,
    categories: [Category.Drink, Category.Hot, Category.Tea],
  },
  {
    name: "Yuza Tea",
    description: "Yuza tea with honey. Yuza is a citrus fruit from Korea.",
    price: 4.50,
    categories: [Category.Drink, Category.Hot, Category.Tea],
  },
  {
    name: "Ginger Tea",
    description: "Ginger tea with honey",
    price: 4.50,
    categories: [Category.Drink, Category.Hot, Category.Tea],
  },
  {
    name: "Jujube Tea",
    description: "Jujube tea with honey. Jujube is a red date from Korea.",
    price: 4.90,
    categories: [Category.Drink, Category.Hot, Category.Tea],
  },
  //#endregion

  // //#region anime drinks
  // {
  //   // name: "Chocolate Form: Flowing Mint Latte",
  //   description: "Insired by Demon Slayer",
  //   price: 7.00,
  //   categories: [Category.Drink, Category.Hot, Category.Coffee, Category.Anime],
  // },
  // {
  //   // name: "Sweet Demon Latte",
  //   description: "Insired by Demon Slayer",
  //   price: 7.00,
  //   categories: [Category.Drink, Category.Hot, Category.Coffee, Category.Anime],
  // },
  // {
  //   // name: "Love Blossom Matcha Latte",
  //   description: "Insired by Demon Slayer",
  //   price: 7.00,
  //   categories: [Category.Drink, Category.Hot, Category.Coffee, Category.Anime],
  // },
  // {
  //   // name: "Mango Flameade",
  //   description: "Insired by Demon Slayer",
  //   price: 6.00,
  //   categories: [Category.Drink, Category.Hot, Category.Coffee, Category.Anime],
  // },
  // {
  //   // name: "Harmonic Grapeade",
  //   description: "Insired by Demon Slayer",
  //   price: 5.50,
  //   categories: [Category.Drink, Category.Hot, Category.Coffee, Category.Anime],
  // },
  // {
  //   // name: "Lemonade Type: Explosive Razz",
  //   description: "Insired by Demon Slayer",
  //   price: 6.00,
  //   categories: [Category.Drink, Category.Hot, Category.Coffee, Category.Anime],
  // },
  // {
  //   // name: "Moe Moe Sweet Mint Beam",
  //   description: "Inspired By Dandadan",
  //   price: 6.50,
  //   categories: [Category.Drink, Category.Hot, Category.Coffee, Category.Anime],
  // },
  // {
  //   // name: "Cursed Turbo Razz Soda",
  //   description: "Inspired By Dandadan",
  //   price: 7.00,
  //   categories: [Category.Drink, Category.Anime],
  // },
  // {
  //   // name: "Strawberry Butterfly Spiral",
  //   description: "Inspired By Dandadan",
  //   price: 6.00,
  //   categories: [Category.Drink, Category.Hot, Category.Coffee, Category.Anime],
  // },
  // {
  //   // name: "Arisen Lychee Lemonade",
  //   description: "Inspired By Solo Leveling",
  //   price: 6.00,
  //   categories: [Category.Drink, Category.Iced, Category.Ade, Category.Anime ],
  // },
  // //#endregion
];