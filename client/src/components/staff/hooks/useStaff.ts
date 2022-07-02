import { Dispatch, SetStateAction, useState } from 'react';
import { useQuery } from 'react-query';

import type { Staff } from '../../../../../shared/types';
import { axiosInstance } from '../../../axiosInstance';
import { queryKeys } from '../../../reactQuery/constants';
import { filterByTreatment } from '../utils';

// for when we need a query function for useQuery
async function getStaff(): Promise<Staff[]> {
  const { data } = await axiosInstance.get('/staff');
  return data;
}

interface UseStaff {
  staff: Staff[];
  filter: string;
  setFilter: Dispatch<SetStateAction<string>>;
}

export function useStaff(): UseStaff {
  // for filtering staff by treatment
  const fallback = [];
  const { data: staff = fallback } = useQuery(queryKeys.staff, getStaff);
  const [filter, setFilter] = useState('all');

  // TODO: get data from server via useQuery

  return { staff, filter, setFilter };
}
