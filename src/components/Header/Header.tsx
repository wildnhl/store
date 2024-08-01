import style from './header.module.scss';
import Link from 'next/link';
import Logo from 'root/public/bookstore-logo.svg';
import BasketIcon from 'root/public/basket.svg';
import FavoritesIcon from 'root/public/favorites.svg';
import UserIcon from 'root/public/user-icon.svg';
import { Search } from '../Search/Search';
export function Header() {
  return (
    <header className={style.headerInner}>
      <Link href={'/'}>
        <Logo />
      </Link>
      <Search formClass={style.form} />
      <div className={style.iconsGroup}>
        <div className={style.iconsGroupItem}>
          <FavoritesIcon />
        </div>
        <div className={style.iconsGroupItem}>
          <Link href={'/cart'}>
            <BasketIcon />
          </Link>
        </div>
        <div className={style.iconsGroupItem}>
          <UserIcon />
        </div>
      </div>
    </header>
  );
}
