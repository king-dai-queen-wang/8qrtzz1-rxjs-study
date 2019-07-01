export class NodeTree {
  id ?: string = null;
  name ?: string = null;
  code ?: string = null;
  order ?: number = null;
  parentId ?: string = null;
  is_parent ?: boolean = false;
  children ?: NodeTree[] = [];
  expendChildren ?: boolean = false;
}