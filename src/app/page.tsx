import { BookList } from '@/components/BooksList/BooksList';
import { fetchNewReleases } from '@/services/new-releases';
export default async function Home() {
  const { books, total } = await fetchNewReleases();
  return <BookList books={books} totalBooks={total} />;
}
