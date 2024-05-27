import { client } from '@/utils/client';
import { singleBookEndpoint } from '@/api';
import { type ISingleBook } from '@/types/singleBook';

export async function fetchSingleBook(id: string) {
  const { data } = await client.get<ISingleBook>(`${singleBookEndpoint}/${id}`);
  return data;
}
