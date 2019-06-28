export class NodeTree {
  id ?: string;
  name ?: string;
  code ?: string;
  order ?: number;
  parentId ?: string;
  is_parent ?: boolean;
  children ?: NodeTree[];
}