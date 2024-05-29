import { client } from '@/utils/client';
import { type INewReleasesType } from '@/types/newRelease';
import { searchEndpoint } from '@/api';

export async function fetchSearch(query: string) {
  const { data } = await client.get<INewReleasesType>(
    `${searchEndpoint}/${query}`
  );
  return data;
}
