export interface IAccountServiceFormType {
  name: string;
  phoneNumber: string;
  autoModel: string;
  causeOfReq: {
    tireFitting: boolean;
    shockAbsorbers: boolean;
    engine:boolean;
    lighting: boolean;
    specificSounds: boolean;
    deafens: boolean;
    breaks: boolean;
    another:boolean
  };
  mileage: number;
  numberOfCar: string;
  agreement: boolean
}
