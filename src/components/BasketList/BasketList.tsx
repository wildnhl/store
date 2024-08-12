'use client';
import { useLocalStorage } from 'react-use';
import { useEffect, useState, useCallback } from 'react';
import { fetchBasketItems } from '@/services/multiple-books';
import { type ISingleBook } from '@/types/singleBook';
import { BasketListCard } from '../BasketListCard/BasketListCard';
import { DefaultButton } from '../Buttons/DefaultButton/DefaultButton';
import style from './basketList.module.scss';

export function BasketList() {
  const [basketItems, setBasketItems] = useState<ISingleBook[]>([]);
  const [value] = useLocalStorage<ILocalStorageValue[]>('cart', undefined);
  const fetchData = useCallback(async () => {
    if (value) {
      const data = await fetchBasketItems(value);
      setBasketItems(data);
    }
  }, [value]);
  useEffect(() => {
    console.log('react');
    fetchData().catch(console.error);
  }, [value, fetchData]);
  return (
    <>
      <ul className={`${style.basketList}`}>
        {basketItems.length > 0
          ? basketItems.map((el) => <BasketListCard key={el.isbn13} {...el} />)
          : 'Empty cart'}
      </ul>
      <DefaultButton>Check out</DefaultButton>
    </>
  );
}
