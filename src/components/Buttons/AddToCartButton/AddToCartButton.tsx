'use client';
import { DefaultButton } from '../DefaultButton/DefaultButton';

interface IProps {
  text: string;
  id: string;
}

export function AddToCartButton({ text, id }: IProps) {
  function addBookToFavorite() {
    console.log('asdadas');
  }
  return <DefaultButton text={text} clickFunc={addBookToFavorite} />;
}
