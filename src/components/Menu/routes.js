import Avatar from '../../assets/images/avatar.png';
import { basePath } from '../../constants/basePath';

export const routes = [
  {
    id: 1,
    name: 'Home',
    img: null,
    path: `${basePath}/`
  },
  {
    id: 2,
    name: 'World News',
    img: null,
    path: `${basePath}/story/world-news`
  },
  {
    id: 3,
    name: 'Story',
    img: null,
    path: `${basePath}/story`
  },
  {
    id: 4,
    name: 'Contact',
    img: null,
    path: `${basePath}/contact`
  },
  {
    id: 5,
    name: '',
    img: Avatar,
    path: `${basePath}/profile`
  },
];