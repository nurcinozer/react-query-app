import { useQuery } from 'react-query';
import { Sample } from '../lib/sample';

export const useData = () => {
  return useQuery('feeds', async (): Promise<Sample> => {
    const res = await fetch('api/feed');
    return res.json();
  });
};
