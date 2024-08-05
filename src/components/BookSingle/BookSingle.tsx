import { AddToBasketButton } from '../Buttons/AddToBasketButton/AddToBasketButton';
import { type ISingleBook } from '@/types/singleBook';
import style from './bookSingle.module.scss';
import Image from 'next/image';

interface IProps {
  book: ISingleBook;
}

export async function BookSingle({ book }: IProps) {
  const { image, price, publisher, language, authors, desc, isbn13: id } = book;
  return (
    <>
      <section className={style.innerTop}>
        <div className={style.imageBackground}>
          <Image
            src={image}
            width={300}
            height={350}
            alt="book-image"
            priority={true}
          />
        </div>
        <div>
          <p className={style.price}>{price}</p>
          <div className={style.detailFlex}>
            <p className={style.nameDetail}>Autors</p>
            <p>{authors}</p>
          </div>
          <div className={style.detailFlex}>
            <p className={style.nameDetail}>Publisher</p>
            <p>{publisher}</p>
          </div>
          <div className={style.detailFlex}>
            <p className={style.nameDetail}>Language</p>
            <p>{language}</p>
          </div>
          <AddToBasketButton id={id} />
        </div>
      </section>
      <section className={style.description}>
        <h3 className={style.descriptionHead}>Description</h3>
        <p className={style.descriptionText}>{desc}</p>
      </section>
    </>
  );
}
