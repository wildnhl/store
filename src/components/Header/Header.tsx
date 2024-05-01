import style from './header.module.scss';
import Logo from 'root/public/bookstore-logo.svg';
import BasketIcon from 'root/public/basket.svg';
import FavoritesIcon from 'root/public/favorites.svg';
import UserIcon from 'root/public/user-icon.svg';
import SearchIcon from 'root/public/search.svg';
export function Header() {
  return (
    <header className={style.headerInner}>
      <Logo />
      <form className={style.form}>
        <input
          className={style.searchInput}
          type="search"
          placeholder="Search"
        />
        <button className={style.btnSubmit} type="submit" disabled>
          <SearchIcon />
        </button>
      </form>
      <div className={style.iconsGroup}>
        <div className={style.iconsGroupItem}>
          <FavoritesIcon />
        </div>
        <div className={style.iconsGroupItem}>
          <BasketIcon />
        </div>
        <div className={style.iconsGroupItem}>
          <UserIcon />
        </div>
      </div>
    </header>
  );
}
