import { IUsedCar } from '@/entities/car-card/models/types/car-card.types';


export interface IUsedCarsFilter {
  used_price_min: string | null,
  used_price_max: string | null,
  used_run_min: string | null,
  used_run_max: string | null,
  used_year_min: string | null,
  used_year_max: string | null,
  used_mark: number[] | null,
  used_transmission: number[] | null,
  used_engine: number[] | null,
  used_body: number[] | null,
  used_drive: number[] | null,
  used_volume: number[] | null,
  used_color: number[] | null,
  used_page: number | null,
  used_page_size: number | null,
}

export interface IUseUsedCars {
  used_cars: IUsedCar[],
  used_cars_count: number,
  filters: IUsedCarsFilter,
  setUsedPriceMin: (val: string | null) => void,
  setUsedPriceMax: (val: string | null) => void,
  setUsedRunMin: (val: string | null) => void,
  setUsedRunMax: (val: string | null) => void,
  setUsedYearMin: (val: string | null) => void,
  setUsedYearMax: (val: string | null) => void,
  setUsedMark: (val: number[] | null) => void,
  setUsedTransmission: (val: number[] | null) => void,
  setUsedEngine: (val: number[] | null) => void,
  setUsedBody: (val: number[] | null) => void,
  setUsedDrive: (val: number[] | null) => void,
  setUsedVolume: (val: number[] | null) => void,
  setUsedColor: (val: number[] | null) => void,
  setUsedPage: (val: number | null) => void,
  setUsedPageSize: (val: number | null) => void,
  fetchUsedCars: () => Promise<void>,
  fetchUsedCarsWithFilters: (filters: IUsedCarsFilter) => Promise<void>,
  setUsedFiltersClear: () => void
}
