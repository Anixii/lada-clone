import {
  IAllOfficersDivisionItem,
  IDefineOfficersDivisionItems,
} from './officers-type';
import { fetcher } from '@/shared/lib/fetcher/fetcher';
import { notFound } from 'next/navigation';


export const officersApi = {
  async getAllOfficers() {
    const allDivisions: Array<IAllOfficersDivisionItem> = await fetcher(
      '/officers/division/all/',
      { customSettings: { next: { revalidate: 3600 } } },
    );
    if (!Array.isArray(allDivisions)) {
      notFound();
    }
    const data = await Promise.all(
      allDivisions.map(async (item) => {
        const defineDivisionsOfficers: Array<IDefineOfficersDivisionItems> =
          await fetcher(`/officers/officers/division/${item.id}/`, { customSettings: { next: { revalidate: 3600 } } });
        return { ...item, officers: defineDivisionsOfficers };
      }),
    );

    if (!('error' in allDivisions)) {
      return data;
    }
    notFound();
  },
};
