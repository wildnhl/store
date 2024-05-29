import { BookList } from '@/components/BooksList/BooksList';
import { fetchSearch } from '@/services/search';
export default async function Page({
  params
}: {
  params: { searchValue: string };
}) {
  const { books } = await fetchSearch(params.searchValue);
  return <BookList books={books} />;
}
