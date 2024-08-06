'use client';
import { useLocalStorage } from 'react-use';
import { useEffect, useState, useCallback } from 'react';
import { fetchBasketItems } from '@/services/multiple-books';
import { type ISingleBook } from '@/types/singleBook';

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
    <div>
      {basketItems.length > 0
        ? basketItems.map((el) => el.title)
        : 'Empty cart'}
    </div>
  );
}
