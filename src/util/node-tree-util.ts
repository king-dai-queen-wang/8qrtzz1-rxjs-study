import { NodeTree } from '../model/node-tree.model'
// 生成组织架构树
export function toNodeTree(data: NodeTree[], parentKeyName: string = 'parentId') {
  const map = {};
  data.sort((a, b) => a.order - b.order);
  data.forEach( (item: any) => {
    map[item.id] = item;
  });
  const result = [];
  data.forEach((item: any) => {
    const parent = map[item[parentKeyName]];
    if (parent) {
      parent.is_parent = true;
      (parent.children || (parent.children = [])).push(item);
    } else {
      result.push(item);
    }
  });
  result.sort((a, b) => a.order - b.order);
  return result;
}