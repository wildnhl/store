import { BookListItem } from '@/components/BookListItem/BookListItem';
import { fetchNewReleases } from '@/services/new-releases';
import { type INewReleasesType } from '@/types/newRelease';
import style from './bookList.module.scss';

export async function BookList() {
  const data: INewReleasesType = await fetchNewReleases();
  console.log(data.total);
  return (
    <section className={style.gridContainer}>
      {data.books.map(({ title, isbn13, price, image }) => {
        return (
          <BookListItem
            key={isbn13}
            title={title}
            price={price}
            image={image}
          />
        );
      })}
    </section>
  );
}
