import style from './basketListCard.module.scss';
import { type ISingleBook } from '@/types/singleBook';
import Image from 'next/image';

export function BasketListCard({
  title,
  image,
  authors,
  year,
  publisher,
  price
}: ISingleBook) {
  return (
    <li className={`${style.mainWrapper}`}>
      <div className={`${style.textAndImageWrapper}`}>
        <div className={`${style.imageWrapper}`}>
          <Image
            src={image}
            width={164}
            height={193}
            priority
            alt="book image"
          />
        </div>
        <div>
          <h3 className={`${style.title}`}>{title}</h3>
          <p className={`${style.authors}`}>
            by {authors}, {publisher} {year}
          </p>
          <div>
            <span>-</span>1<span>+</span>
          </div>
        </div>
      </div>
      <div className={`${style.priceAndCloseWrapper}`}>
        <div className={`${style.price}`}>{price}</div>
        <div>X</div>
      </div>
    </li>
  );
}
