import Image from 'next/image';
import BookImg from 'root/public/book.png';
import style from './bookListItem.module.scss';
export function BookListItem() {
  return (
    <div>
      <div className={style.imageBckg}>
        <Image src={BookImg} width={226} height={264} alt="book" />
      </div>
      <h3 className={style.heading}>
        Android Apps for Absolute Beginners, 2nd Edition
      </h3>
      <p className={style.author}>by Lentin Joseph, Apress 2018</p>
      <p className={style.price}>$31.38</p>
    </div>
  );
}
