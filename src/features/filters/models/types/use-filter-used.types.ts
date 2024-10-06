import { IFilterColor, IFilterDefault, IFilterYear } from './use-filters.type';


export interface IUseUsedCarsFilters {
  used_body: IFilterDefault[],
  used_color: IFilterColor[],
  used_drive: IFilterDefault[],
  used_engine: IFilterDefault[],
  used_families: IFilterDefault[],
  used_mark: IFilterDefault[]
  used_transmission: IFilterDefault[],
  used_volume: IFilterDefault[],
  used_year: IFilterYear[]
  fetchUsedFiltersBody: () => Promise<void>,
  fetchUsedFiltersColors: () => Promise<void>,
  fetchUsedFiltersDrive: () => Promise<void>,
  fetchUsedFiltersEngine: () => Promise<void>,
  fetchUsedFiltersFamilies: () => Promise<void>,
  fetchUsedFiltersMark: () => Promise<void>,
  fetchUsedFiltersTransmission: () => Promise<void>,
  fetchUsedCarVolume: () => Promise<void>,
  fetchUsedFiltersYear: () => Promise<void>
}

export const ENDPOINTS = {
  BODY: '/usedcar/body/all/',
  COLOR: '/usedcar/color/all/',
  DRIVE: '/usedcar/drive/all/',
  ENGINE: '/usedcar/engine/all/',
  FAMILIES: '/usedcar/families/all/',
  MARK: '/usedcar/mark/all/',
  TRANSMISSION: '/usedcar/transmission/all/',
  VOLUME: '/usedcar/volume/all/',
  YEAR: '/usedcar/year/all/',
};

export const UsedFilterNames = {
  USED_BODY: 'used_body',
  USED_COLOR: 'used_color',
  USED_DRIVE: 'used_drive',
  USED_ENGINE: 'used_engine',
  USED_FAMILIES: 'used_families',
  USED_MARK: 'used_mark',
  USED_TRANSMISSION: 'used_transmission',
  USED_VOLUME: 'used_volume',
  USED_YEAR: 'used_year',
};
