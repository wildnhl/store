import { BookList } from '@/components/BooksList/BooksList';
import { fetchSearch } from '@/services/search';
import { PageTitle } from '@/components/PageTitle/PageTitle';
export default async function Page({
  params
}: {
  params: { searchValue: string; pageNumber: string };
}) {
  const { data } = await fetchSearch(params.searchValue, params.pageNumber);
  return (
    <>
      <PageTitle>{`'${params.searchValue}' search result`}</PageTitle>
      <BookList books={data.books} totalBooks={data.total} page={data.page} />
    </>
  );
}
