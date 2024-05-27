import { BookListItem } from '@/components/BookListItem/BookListItem';
import { fetchNewReleases } from '@/services/new-releases';
import style from './bookList.module.scss';

export async function BookList() {
  const { books } = await fetchNewReleases();
  return (
    <section className={style.gridContainer}>
      {books.map(({ title, isbn13, price, image }) => {
        return (
          <BookListItem
            key={isbn13}
            title={title}
            price={price}
            image={image}
            id={isbn13}
          />
        );
      })}
    </section>
  );
}
