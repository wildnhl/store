import style from './defaultButton.module.scss';

interface IProps {
  text: string;
  clickFunc?: (event: any) => void;
}
export function DefaultButton({ text, clickFunc }: IProps) {
  return (
    <button className={style.btn} onClick={clickFunc}>
      {text}
    </button>
  );
}
