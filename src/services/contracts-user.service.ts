import { ServiceData, ServicesData } from "./models/session-data.model";
import { UserData } from "./models/session-data.model"

export class ContractServices {

    constructor (){}

    public getContractServices(): ServicesData {
        const services: ServicesData = {
            services: [
                {
                    name: 'channels',
                    price: 35
                },
                {
                    name: 'games',
                    price: 60
                },
                {
                    name: 'films',
                    price: 90
                },
                {
                    name: 'furniture',
                    price: 126
                }
            ]
        }        
        return services
    }

    public userBalance(): UserData {
        const balance: UserData = {
            name: "pepe",
            age: "30",
            mail: "pepe@gmail.com",
            balance: 50,
        }
        return balance
    }
}