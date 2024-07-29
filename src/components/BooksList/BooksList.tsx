import { BookListItem } from '@/components/BookListItem/BookListItem';
import { type IBookShort } from '@/types/newRelease';
import style from './bookList.module.scss';
import { Pagination } from '../Pagination/Pagination';
interface IProps {
  books: IBookShort[];
  totalBooks: string;
  page?: string;
}

export async function BookList({ books, totalBooks, page }: IProps) {
  // console.log('page', page);
  const paginationShow = page != null && (
    <Pagination total={totalBooks} currentPage={+page} />
  );
  return (
    <>
      <section>
        {paginationShow}
        <ul className={style.gridContainer}>
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
        </ul>
        {paginationShow}
      </section>
    </>
  );
}
