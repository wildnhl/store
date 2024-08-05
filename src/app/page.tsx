import { BookList } from '@/components/BooksList/BooksList';
import { fetchNewReleases } from '@/services/new-releases';
import { PageTitle } from '@/components/PageTitle/PageTitle';
export default async function Home() {
  const { books, total } = await fetchNewReleases();
  return (
    <>
      <PageTitle>New Releases Books</PageTitle>
      <BookList books={books} totalBooks={total} />
    </>
  );
}
