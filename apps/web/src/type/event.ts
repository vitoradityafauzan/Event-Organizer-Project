export interface EventCreate {
    name: string;
    slug: string;
    desc: string;
    image: string;
    price: number;
    amount: number;
    locationId: number;
    categoryId: number;
    startDate: string;
    endDate: string;
}

export interface FormEventCreate {
    name: string;
    slug: string;
    desc: string;
    image: string;
    price: number;
    amount: number;
    locationId: number;
    categoryId: number;
    startDate: string;
    endDate: string;
    startTime: string;
    endTime: string;
}

export interface CategoryLocationFetch {
    idCategory: number;
    nameCategory: string;
    idLocation: number;
    nameLocation: string;
}
