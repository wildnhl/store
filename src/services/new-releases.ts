import { client } from '@/utils/client';
import { type INewReleases } from '@/types/newRelease';
import { newReleasesEndpoint } from '@/api';

export async function fetchNewReleases() {
  const { data } = await client.get<INewReleases>(newReleasesEndpoint);
  return data;
}
