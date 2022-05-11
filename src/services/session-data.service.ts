import { SessionData } from "./models/session-data.model"


export class SessionDataService {
    constructor(){}

    public getSessionData(): SessionData{
        const data: SessionData = {
            name: "Pepe",
            mail: "pepe@gmail.com",
            age: "30",
            direction: "C/Y una mierda",
            nationality: "Mexicano",
        }
        return data;
    }
    
};