export interface IFilterDefault {
  id: number,
  name: string
}

export interface IFilterYear {
  id: number,
  year: number
}

export interface IFilterModel extends IFilterDefault {
  car_families: number
}

export interface IFilterColor extends IFilterDefault {
  color: string
}

export interface IFilterPower extends IFilterDefault {
  car_volume_available: number
}


export type IFilterItem = IFilterColor | IFilterDefault | IFilterModel

export const FilterNames = {
  HAS_STOCK: 'has_stock',
  BODY: 'body',
  COLORS: 'color',
  DRIVE: 'drive',
  MODEL: 'model',
  TRANSMISSION: 'transmission',
  FAMILY: 'family',
  MODEL_BY_FAMILY: 'model_by_family',
  VOLUME: 'volume',
  POWER_BY_VOLUME: 'power_by_volume',
};

export interface IUseFilters {
  body: IFilterDefault[],
  colors: IFilterColor[],
  drive: IFilterDefault[],
  model: IFilterModel[],
  transmission: IFilterDefault[],
  family: IFilterDefault[],
  model_by_family: IFilterModel[]
  volume: IFilterDefault[],
  power_by_volume: IFilterPower[]
  fetchFiltersBody: () => Promise<void>,
  fetchFiltersColors: () => Promise<void>,
  fetchFiltersDrive: () => Promise<void>,
  fetchFiltersModel: () => Promise<void>,
  fetchFiltersTransmission: () => Promise<void>,
  fetchCarFamily: () => Promise<void>,
  fetchCarModelByFamily: (arg: IFilterDefault[]) => Promise<void>
  fetchCarVolume: () => Promise<void>,
  fetchPowerByVolume: (arg: IFilterDefault[]) => Promise<void>,
}

export const ENDPOINTS = {
  MAIN: '/caravailable/filter/',
  BODY: '/caravailable/body/filter/',
  COLORS: '/caravailable/color/filter/',
  DRIVE: '/caravailable/drive/filter/',
  MODEL: '/caravailable/model/filter/',
  FAMILY: '/caravailable/family/all/',
  MODEL_FAMILY: '/caravailable/model/family/:id/',
  TRANSMISSION: '/caravailable/transmission/filter/',
  VOLUME: '/caravailable/volume/all/',
  POWER_BY_VOLUME: '/caravailable/power/volume/:id/',
};
