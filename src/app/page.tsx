import { BookList } from '@/components/BooksList/BooksList';
import { fetchNewReleases } from '@/services/new-releases';
export default async function Home() {
  const { books } = await fetchNewReleases();
  return (
    <main>
      <BookList books={books} />
    </main>
  );
}
