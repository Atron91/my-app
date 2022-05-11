export interface SessionData {
    name: string,
    mail: string,
    age: string,
    direction: string,
    nationality: string,
}

export interface ServiceData {
    name: string,
    price: number
}

export interface ServicesData {
    services: ServiceData[]
}

export interface UserData {
    name: string,
    age: string,
    mail: string,
    balance: number,
}