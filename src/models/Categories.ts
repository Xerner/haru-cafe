export enum Category {
  Drink = "Drink",
  Food = "Food",
  Juice = "Fresh Juice",
  SingleFlavor = "Single Flavor",
  MixedFlavor = "Mixed Flavor",
  Sandwich = "Sandwich",
  MiniPizza = "Mini Pizza",
  Bakery = "Bakery",
  Snack = "Snack",
  Coffee = "Coffee",
  NonCoffee = "Non-Coffee",
  Hot = "Hot",
  Iced = "Iced",
  Ade = "Ade",
  Seasonal = "Seasonal",
  Tea = "Tea",
  Anime = "Anime",
}

export const MutuallyExclusiveCategories: Category[][] = [
  // [Category.Food, Category.Drink],
  // [Category.Coffee, Category.NonCoffee],
  // [Category.Hot, Category.Iced],
];
