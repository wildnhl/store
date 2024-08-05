import style from './defaultButton.module.scss';
import { type ReactNode } from 'react';

interface IProps {
  children: ReactNode;
  onClick?: () => void;
}

export function DefaultButton({ onClick, children }: IProps) {
  return (
    <button className={style.btn} onClick={onClick}>
      {children}
    </button>
  );
}
