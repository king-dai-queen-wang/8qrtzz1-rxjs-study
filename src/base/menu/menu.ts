import { Menu } from '../../model/menu.model';

export const MENU: Menu[] = [
  {
    id: 'a',
    parentId: null,
    name: 'a',
    url: '',
    order: 0,
    icon: '',
    children: []
  },
  {
    id: 'a1',
    parentId: 'a',
    name: 'a1',
    url: '',
    order: 0,
    icon: '',
    children: []
  },
  {
    id: 'a2',
    parentId: 'a',
    name: 'a2',
    url: '',
    order: 0,
    icon: '',
    children: []
  },
  {
    id: 'a3',
    parentId: 'a2',
    name: 'a23',
    url: '',
    order: 0,
    icon: '',
    children: []
  },
  {
    id: 'b',
    parentId: null,
    name: 'b',
    url: '',
    order: 0,
    icon: '',
    children: []
  },
  {
    id: 'b1',
    parentId: 'b',
    name: 'b1',
    url: '',
    order: 0,
    icon: '',
    children: []
  },
]
