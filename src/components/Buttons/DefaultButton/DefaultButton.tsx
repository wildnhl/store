'use client';
import style from './defaultButton.module.scss';
interface IProps {
  text: string;
}
export function DefaultButton({ text }: IProps) {
  return <button className={style.btn}>{text}</button>;
}
