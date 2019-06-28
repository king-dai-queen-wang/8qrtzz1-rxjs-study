import { NodeTree } from './node-tree.model';
export class Menu extends NodeTree {
  constructor() {
    super()
  }
  url ?: string;
  icon ?: string;
  children ?: Menu[];
}