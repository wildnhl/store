'use client';
import SearchIcon from 'root/public/search.svg';
import style from './search.module.scss';
import { useState, type ChangeEvent, type FormEvent, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
interface IProps {
  formClass: string;
}
export function Search({ formClass }: IProps) {
  const [searchValue, setSearchValue] = useState('');
  const router = useRouter();
  const params = useParams();
  function handleChangeSearchInput(event: ChangeEvent<HTMLInputElement>) {
    setSearchValue(event.target.value);
  }
  function handleSumbitSearchForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    router.push(`/search/${searchValue}/1`);
  }
  useEffect(() => {
    if (params.searchValue !== undefined) {
      setSearchValue(params.searchValue as string);
    } else {
      setSearchValue('');
    }
  }, [params.searchValue]);

  return (
    <form className={formClass} onSubmit={handleSumbitSearchForm}>
      <input
        className={style.searchInput}
        type="search"
        placeholder="Search"
        value={searchValue}
        onChange={handleChangeSearchInput}
      />
      <button className={style.btnSubmit} type="submit">
        <SearchIcon />
      </button>
    </form>
  );
}
