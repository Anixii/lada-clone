import { ICar } from '@/entities/car-card/models/types/car-card.types';


export interface ICarsFilter {
  price_min: string | null,
  price_max: string | null,
  model: number[] | null,
  transmission: number[] | null,
  body: number[] | null,
  drive: number[] | null,
  volume: number[] | null,
  color: number[] | null,
  has_stock: number[] | null
  page: string | null
  page_size: string | null
}

export interface IUseCars {
  cars: ICar[],
  count: number,
  filters: ICarsFilter,
  setPriceMin: (val: string | null) => void,
  setPriceMax: (val: string | null) => void,
  setModel: (val: number[] | null) => void,
  setTransmission: (val: number[] | null) => void,
  setBody: (val: number[] | null) => void,
  setDrive: (val: number[] | null) => void,
  setVolume: (val: number[] | null) => void,
  setColor: (val: number[] | null) => void,
  setHasStock: (val: number[] | null) => void,
  fetchCars: () => Promise<void>,
  fetchCarsWithFilters: (filters: ICarsFilter) => Promise<void>,
  setFiltersClear: () => void
}
