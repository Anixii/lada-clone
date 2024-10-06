import { PagesBreadcrumb } from '../variables/variables';


export const adaptiveHandler = <T>(desktop: T, tablet: T, mobile: T, isMobile: boolean, isTablet: boolean): T => {
  if (isMobile) {
    return mobile;
  } else if (isTablet) {
    return tablet;
  } else {
    return desktop;
  }
};

export const breadcrumbTitleHandler = (link: string) => {
  return PagesBreadcrumb.find((item) => item.path === link);
};

export function getTotalPages(totalItems:number, pageSize: number) {
  return Math.ceil(totalItems / pageSize);
};

// export const translateObject = (inputObject: Object) => {
//   const translations = {
//     vehicle_configuration: "Конфигурация автомобиля",
//     engine_displacement: "Объем двигателя",
//     drive_transmission: "Тип привода",
//     rudder: "Руль",
//     volume_cm3: "Объем см3",
//     engine: "Двигатель",
//     body_type: "Тип кузова",
//     name_color: "Цвет",
//     color: "Цвет (доп.)",
//     car_available: "Наличие автомобиля",
//   };

//   const translatedObject = {};

//   for (const key in inputObject) {
//     if (translations[key]) {
//       translatedObject[translations[key]] = inputObject[key];
//     }
//   }

//   return translatedObject;
// };
