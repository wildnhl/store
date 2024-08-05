import { useLocalStorage } from 'react-use';
import { useEffect, useState } from 'react';
import { fetchBasketItems } from '@/services/multiple-books';
import { type ISingleBook } from '@/types/singleBook';
export function BasketList() {
  const [basketItems, setBasketItems] = useState<ISingleBook[]>([]);
  const [value] = useLocalStorage<ILocalStorageValue[]>('cart', undefined);
  useEffect(() => {
    const fetchData = async () => {
      if (value) {
        const data = await fetchBasketItems(value);
        setBasketItems(data);
        return data;
      }
    };
    fetchData().catch(console.error);
  }, [fetchBasketItems]);
  console.log(basketItems);
  return <div>{basketItems.map((el) => el.title)}</div>;
}
