import { NavigationItem } from '../models/navigation';

export const HOME = 'home';
export const HOME_ROUTE = `/${HOME}`;

export const FIELDS_BUILDER = 'fields-builder';
export const FIELDS_BUILDER_ROUTE = `/${FIELDS_BUILDER}`;

export const NOT_FOUND = 'not-found';
export const NOT_FOUND_ROUTE = `/${NOT_FOUND}`;

export const NAVIGATION: NavigationItem[] = [
  {
    title: 'Home',
    route: HOME_ROUTE,
  },
  {
    title: 'Fields Builder',
    route: FIELDS_BUILDER_ROUTE,
  },
];
