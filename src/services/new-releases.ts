import { client } from '@/utils/client';
import { newReleasesEndpoint } from '@/api';

export async function fetchNewReleases() {
  const { data } = await client.get(newReleasesEndpoint);
  return data;
}
