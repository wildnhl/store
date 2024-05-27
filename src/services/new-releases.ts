import { client } from '@/utils/client';
import { type INewReleasesType } from '@/types/newRelease';
import { newReleasesEndpoint } from '@/api';

export async function fetchNewReleases() {
  const { data } = await client.get<INewReleasesType>(newReleasesEndpoint);
  return data;
}
