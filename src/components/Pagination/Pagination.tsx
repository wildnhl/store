'use client';
import { paginationScheme } from '@/helpers/paginationScheme';
import style from './pagination.module.scss';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
interface IPropsPagination {
  total: string;
  currentPage: number;
}

export function Pagination({ total, currentPage }: IPropsPagination) {
  const currentPath = usePathname();
  const pathLastSlash = currentPath.lastIndexOf('/');
  const pathRequired = currentPath.slice(0, pathLastSlash);
  const activePage = +currentPath.slice(pathLastSlash + 1);

  let pagesCount = Math.round(+total / 10);
  pagesCount = pagesCount > 100 ? 100 : pagesCount;

  const lastPage = activePage - 1;
  const nextPage = activePage + 1;
  return (
    <div className={style.inner}>
      <Link
        className={`${lastPage <= 0 ? style.disableLink : ''} ${style.navBtns}`}
        href={`${pathRequired}/${lastPage}`}
        aria-disabled={lastPage <= 0}
        tabIndex={lastPage <= 0 ? -1 : undefined}
      >
        <span>Prev</span>
      </Link>
      <ol className={style.schemeInner}>
        {paginationScheme(pagesCount, currentPage).map((el, index) => {
          if (Number.isNaN(el)) {
            return (
              <li className={style.pagItem} key={index}>
                <span>...</span>
              </li>
            );
          } else {
            return (
              <li className={style.pagItem} key={index}>
                <Link
                  className={`${
                    el === activePage ? style.activeLink : style.pagItem
                  } ${style.link}`}
                  href={`${pathRequired}/${el}`}
                >
                  <span>{el}</span>
                </Link>
              </li>
            );
          }
        })}
      </ol>
      <Link
        className={`${nextPage > pagesCount ? style.disableLink : ''} ${
          style.navBtns
        }`}
        href={`${pathRequired}/${nextPage}`}
        aria-disabled={nextPage > pagesCount}
        tabIndex={nextPage > pagesCount ? -1 : undefined}
      >
        <span>Next</span>
      </Link>
    </div>
  );
}
