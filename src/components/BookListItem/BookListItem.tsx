import Image from 'next/image';
import style from './bookListItem.module.scss';
interface IProps {
  title: string;
  price: string;
  image: string;
}
export function BookListItem({ title, price, image }: IProps) {
  return (
    <div className={style.bookContainer}>
      <div className={style.imageBckg}>
        <Image
          className={style.image}
          priority={true}
          src={image}
          width={226}
          height={264}
          alt="book"
        />
      </div>

      <h3 className={style.title}>{title}</h3>
      <p className={style.author}>by Lentin Joseph, Apress 2018</p>
      <p className={style.price}>{price}</p>
    </div>
  );
}
