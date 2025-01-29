import { Category } from "./Categories";
import { IMenuItem } from "./interfaces/IMenuItem";

export class MenuItem implements IMenuItem {
  name: string;
  imageUrl?: string | undefined;
  description?: string | undefined;
  price: number;
  categories?: Category[] | undefined;
  isFavorite?: boolean | undefined;
  isActive?: boolean | undefined;

  constructor(private menuItem: IMenuItem) {
    this.name = menuItem.name;
    this.imageUrl = menuItem.imageUrl;
    this.description = menuItem.description;
    this.price = menuItem.price;
    this.categories = menuItem.categories;
    this.isFavorite = menuItem.isFavorite;
    this.isActive = menuItem.isActive;
  }

  hasDescription() {
    return typeof this.description === "string" && this.description.length > 0;
  }
}