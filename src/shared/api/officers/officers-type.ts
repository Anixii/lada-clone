export interface IDefineOfficersDivisionItems {
    id:number;
    position: string;
    first_name:string;
    last_name:string;
    middle_name:string;
    link: string;
    phone_number: string;
    image: string;
    image_path: string;
    division: string
};

export interface IAllOfficersDivisionItem {
    id: number;
    name: string
}

export interface OfficersApiData {
    id: number;
    name: string;
    officers: Array<IDefineOfficersDivisionItems>
}
