export interface ISignup {
    name: string;
    email: string;
    password: string;
    phone: string;
    road?: string;
    district?: string;
    complement?: string;
    post?: string;
    number_address?: string;
    city?: string;
    state?: string;
}

export interface ISignin {
    id: string;
    name?: string;
    email: string;
    password: string;
    token: string;
}

export interface ICompanies {
    name: string,
    email: string,
    address: {
        phone: string,
        road: string,
        district: string,
        complement?: string,
        post?: string,
        number_address: string,
        city: string,
        state: string,
    },
    location?: {
        lati: string,
        long: string,
    },
    open_schedules: boolean,
    id_favorite?: string[]
}

export interface ITheme {
    background_primary: string;
    background_second: string;
    text_primary: string;
    text_second: string;
    text_color: string;
    color_error: string;
}

export const themes = {
    background_primary: "#09184D",
    background_second: "#EDF2FA",
    text_primary: "#2F2E2E",
    text_second: "#808085",
    text_color: "#7B5BF2",
    color_error: "#F40000"
}
