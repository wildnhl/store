import { BookListItem } from '@/components/BookListItem/BookListItem';
import { type IBookShort } from '@/types/newRelease';
import style from './bookList.module.scss';
interface IProps {
  books: IBookShort[];
}

export async function BookList({ books }: IProps) {
  return (
    <>
      <section>
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
        <div>GG</div>
      </section>
    </>
  );
}
