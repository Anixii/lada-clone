export interface IAvaiailableCarDetails {
  id: number;
  name: string;
  vin: string;
  full_price: number;
  monthly_price: number;
  image: string;
  image_path: string;
  image_detail: string;
  image_detail_patg: string;
  car_model: number;
  transmission: number;
  car_body: number;
  car_drive: number;
  car_volume: number;
  car_color: number;
  vehicle_configuration: number;
}
export interface IAvaiableCarDetailsMainFeatures {
  id: number;
  vehicle_configuration: string;
  engine_displacement: string;
  drive_transmission: string;
  rudder: string;
  volume_cm3: string;
  engine: string;
  body_type: string;
  name_color: string;
  color: string;
  car_available:string
}
