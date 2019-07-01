import { NodeTree } from './node-tree.model';
export class Menu extends NodeTree {
  constructor() {
    super()
  }
  url ?: string = null;
  icon ?: string = null;
  children ?: Menu[] = [];
}