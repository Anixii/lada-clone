export interface IPathTypes {
  MAIN: string;
  MODEL_ROW: string;
  CAR_AVAILABLE: string;
  USED_CAR: string;
  STOCK_AUTO: string;
  AUTH: string;
  CUSTOMERS: string;
  BUYOUT: string;
  TRADEIN: string;
  CORPORATESALES: string;
  TEST_DRIVE: string;
  NEWS: string;
  EMPLOYEE: string;
  VACANCY: string;
  FEEDBACK: string;
  ABOUT_US: string;
  INSURANCE: string;
  LEASING: string;
  CREDIT: string;
  REPAIR: string;
  MAINTENANCE: string;
  SERVICE: string;
  TOW_TRUCK: string;
  STOCK_SALES:string
}

export interface IHeaderModelLinks {
  title: string;
  href: string;
}

export interface ICustomersBuybackCardItem {
  title: string;
  subtitle: string;
}

export interface IAdvantagesItems {
  title?: string;
  subtitle: string;
  image: HTMLImageElement;
}

export interface IResult<T> {
  count: number;
  next: null | string;
  previous: null | string;
  results: Array<T>;
}
export interface IErrorResult {
  error: boolean;
  status: number
}
