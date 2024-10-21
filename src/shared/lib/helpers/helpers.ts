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

export function formatPhoneNumber(phoneNumber:string) {
  try {
    const cleanedNumber = phoneNumber.startsWith('+') ? phoneNumber.slice(1) : phoneNumber;

    if (!/^\d{11}$/.test(cleanedNumber)) {
      throw new Error('Invalid phone number format');
    }

    return cleanedNumber.replace(/(\d)(\d{3})(\d{3})(\d{2})(\d{2})/, '$1 $2 $3 $4 $5');
  } catch (error) {
    return phoneNumber;
  }
}
