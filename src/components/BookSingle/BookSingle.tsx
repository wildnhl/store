import { fetchSingleBook } from '@/services/single-book';
import { DefaultButton } from '../Buttons/DefaultButton/DefaultButton';
import style from './bookSingle.module.scss';
import Image from 'next/image';
interface IProps {
  id: string;
}
export async function BookSingle({ id }: IProps) {
  const { image, price, publisher, language, authors, desc } =
    await fetchSingleBook(id);
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
          <DefaultButton text="Add to cart" />
        </div>
      </section>
      <section className={style.description}>
        <h3 className={style.descriptionHead}>Description</h3>
        <p className={style.descriptionText}>{desc}</p>
      </section>
    </>
  );
}
