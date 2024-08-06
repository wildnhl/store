'use client';

import { DefaultButton } from '../DefaultButton/DefaultButton';
import { useLocalStorage } from 'react-use';
import { useEffect, useState } from 'react';
interface IProps {
  id: string;
}

export function AddToBasketButton({ id }: IProps) {
  const [item, setItem] = useState<ILocalStorageValue>();
  const [load, setLoad] = useState<'load' | 'Book was added' | 'Add to basket'>(
    'load'
  );
  const [value, setValue] = useLocalStorage<ILocalStorageValue[]>(
    'cart',
    undefined
  );

  useEffect(() => {
    if (value) {
      const findItem = value.find((el) => el.id === id);
      setItem(findItem);
      findItem ? setLoad('Book was added') : setLoad('Add to basket');
    }
  }, [id, value]);

  function addBookToFavorite() {
    if (!value) {
      setValue([{ id, amount: 1 }]);
      setLoad('Book was added');
    } else {
      if (!item) {
        value.push({ id, amount: 1 });
        setValue(value);
        setLoad('Book was added');
      }
    }
  }
  return (
    <DefaultButton onClick={item ? undefined : addBookToFavorite}>
      {load}
    </DefaultButton>
  );
}
