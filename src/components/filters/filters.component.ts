import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonToggleChange, MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatChipsModule } from '@angular/material/chips';
import { Category } from 'models/Categories';
import { FilterService } from 'services/filter.service';
import { ARRAY } from '../../../common/library';

export interface ICategoryNode {
  category: Category | null;
  childCategories: Category[];
  multiple?: boolean;
}

@Component({
  selector: 'haru-filters',
  imports: [
    MatButtonToggleModule,
    MatChipsModule,
    CommonModule,
  ],
  templateUrl: './filters.component.html',
})
export class FiltersComponent {
  Category = Category;
  readonly categoryGraph: ICategoryNode[] = [
    {
      category: null,
      childCategories: [Category.Food, Category.Drink],
    },
    {
      category: Category.Food,
      childCategories: [Category.Sandwich, Category.MiniPizza, Category.Bakery, Category.Snack],
    },
    {
      category: Category.Drink,
      childCategories: [Category.Hot, Category.Iced, Category.Juice],
    },
    {
      category: Category.Hot,
      childCategories: [Category.Coffee, Category.NonCoffee],
    },
    {
      category: Category.Iced,
      childCategories: [Category.Coffee, Category.NonCoffee],
    },
    {
      category: Category.Juice,
      childCategories: [Category.SingleFlavor, Category.MixedFlavor],
    },
  ]
  readonly currentOptions = [this.getRootNode()];

  constructor(
    protected filtersService: FilterService
  ) { }

  getRootNode(): ICategoryNode {
    var node = this.categoryGraph.find(node => node.category === null);
    if (node === undefined) {
      console.error(`Root node not found in category graph`);
      throw new Error(`Root node not found in category graph`);
      
    }
    return node;
  }

  getCategoryNodes(): ICategoryNode[] {
    var activeCategories = this.filtersService.activeCategories();
    var root = this.getRootNode();
    var nodes: ICategoryNode[] = [root];
    for (let i = 0; i < activeCategories.length; i++) {
      const category = activeCategories[i];
      var currentNode = this.categoryGraph.find(node => node.category === category);
      if (currentNode === undefined) {
        return nodes;
      }
      nodes.push(currentNode);
    }
    return nodes;
  }

  findNodeWithCategory(category: Category) {
    return this.categoryGraph.find(node => node.category === category);
  }

  getDepthOfCategory(root: ICategoryNode, target: Category, depth: number = -1): number {
    if (root.category === target) {
      return depth;
    }
    depth++;
    if (root.childCategories.includes(target)) {
      return depth;
    }
    for (let i = 0; i < root.childCategories.length; i++) {
      const childCategory = root.childCategories[i];
      var nextNode = this.findNodeWithCategory(childCategory);
      if (nextNode === undefined) {
        return -1;
      }
      var newDepth = this.getDepthOfCategory(nextNode, target, depth);
      if (newDepth !== -1) {
        depth = newDepth;
        break;
      }
    }
    return depth;
  }

  onToggleButtonClicked(event: MatButtonToggleChange) {
    var category = event.source.value as Category;
    var activeCategories = this.filtersService.activeCategories();
    var root = this.getRootNode();
    var depth = this.getDepthOfCategory(root, category);
    if (depth === -1) {
      console.error(`Category ${category} not found in category graph`);
      return;
    }
    var isAlreadyActive = activeCategories.includes(category);
    activeCategories = activeCategories.slice(0, depth);
    if (isAlreadyActive == false) {
      activeCategories.push(category);
    }
    this.filtersService.activeCategories.set(activeCategories);
  }

  isCategorySelected(category: Category) {
    return this.filtersService.activeCategories().includes(category);
  }

  getStyle(categoryGroup: ICategoryNode) {
    return {
      'grid-template-columns': `repeat(${categoryGroup.childCategories.length}, minmax(0, 1fr))`,
    }
  }
}
