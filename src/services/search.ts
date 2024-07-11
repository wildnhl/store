import { client } from '@/utils/client';
import { type INewReleases } from '@/types/newRelease';
import { searchEndpoint } from '@/api';

export async function fetchSearch(query: string) {
  return await client.get<INewReleases>(`${searchEndpoint}/${query}`);
}
