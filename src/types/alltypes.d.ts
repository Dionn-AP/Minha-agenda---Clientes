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