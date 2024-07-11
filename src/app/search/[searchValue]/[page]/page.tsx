import { BookList } from '@/components/BooksList/BooksList';
import { fetchSearch } from '@/services/search';
export default async function Page({
  params
}: {
  params: { searchValue: string; pageNumber: string };
}) {
  const { data } = await fetchSearch(params.searchValue, params.pageNumber);
  return <BookList books={data.books} />;
}
