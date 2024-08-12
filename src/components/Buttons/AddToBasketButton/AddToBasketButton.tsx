'use client';
import { DefaultButton } from '../DefaultButton/DefaultButton';
import { useAppSelector, useAppDispatch } from '@/lib/hooks';
import { addFavoriteBook } from '@/lib/reducers/basket-slice';
import { useState, useEffect, useMemo } from 'react';
interface IProps {
  id: string;
}

export function AddToBasketButton({ id }: IProps) {
  const [isLoading, setIsLoading] = useState(true);
  const basketData = useAppSelector((state) => state.basket.data);
  const dispatch = useAppDispatch();
  const findItemInBasket = useMemo(
    () => basketData.find((el) => el.id === id),
    [basketData, id]
  );

  useEffect(() => {
    setIsLoading(false);
  }, [findItemInBasket]);

  function onClick() {
    if (!findItemInBasket) {
      dispatch(addFavoriteBook(id)).catch(console.error);
    }
  }

  if (isLoading) {
    return (
      <DefaultButton onClick={findItemInBasket ? undefined : onClick}>
        Loading...
      </DefaultButton>
    );
  } else {
    return (
      <DefaultButton onClick={findItemInBasket ? undefined : onClick}>
        {findItemInBasket ? 'Book was added' : 'Add to basket'}
      </DefaultButton>
    );
  }
}
