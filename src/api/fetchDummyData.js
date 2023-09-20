import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const useDummyData = () => {
  return useQuery(['repoData'], () =>
    axios.get('https://api.github.com/repos/TanStack/query').then((res) => res.data)
  );
};

// useQuery({
    //   queryKey: ['repoData'],
    //   queryFn: () => axios.get('https://api.github.com/repos/TanStack/query').then((res) => res.data)
    // 
export default useDummyData;
