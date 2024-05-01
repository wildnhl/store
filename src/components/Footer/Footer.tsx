import style from './footer.module.scss';

export function Footer() {
  return (
    <footer className={`${style.footerOuter} ${style.footerInner}`}>
      <p className={style.text}>©2022 Bookstore</p>
      <p className={style.text}>All rights reserved</p>
    </footer>
  );
}
