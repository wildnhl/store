import { type ReactNode } from 'react';
import style from './pageTitle.module.scss';
interface IProps {
  children: ReactNode;
}
export function PageTitle({ children }: IProps) {
  return <h2 className={style.font}>{children}</h2>;
}
