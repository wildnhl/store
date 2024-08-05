import { fetchSingleBook } from './single-book';

export async function fetchBasketItems(value: ILocalStorageValue[]) {
  const promises = value.map(async (el) => await fetchSingleBook(el.id));
  return await Promise.all(promises).then((results) => results);
}
