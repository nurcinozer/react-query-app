import { Entry } from '../lib/sample';

export const titleAscSort = (a: Entry, b: Entry) => {
  return a.title.localeCompare(b.title);
};

export const titleDescSort = (a: Entry, b: Entry) => {
  return b.title.localeCompare(a.title);
};

export const dateAscSort = (a: Entry, b: Entry) => {
  return a.releaseYear - b.releaseYear;
};

export const dateDescSort = (a: Entry, b: Entry) => {
  return b.releaseYear - a.releaseYear;
};
