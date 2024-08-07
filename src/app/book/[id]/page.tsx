import { BookSingle } from '@/components/BookSingle/BookSingle';
import { PageTitle } from '@/components/PageTitle/PageTitle';
import { fetchSingleBook } from '@/services/single-book';
import { StoreProvider } from '@/app/StoreProvider';
export default async function Page({ params }: { params: { id: string } }) {
  const book = await fetchSingleBook(params.id);
  const { title } = book;
  return (
    <>
      <PageTitle>{`${title}`}</PageTitle>
      <StoreProvider>
        <BookSingle book={book} />
      </StoreProvider>
    </>
  );
}
