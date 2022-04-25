export class LoginUtilsService {
    constructor(){}

    /**
     * validatePassword
     *   password: string     
     * */
    public validatePassword(password: string): boolean {
        return password.length === 6;
    }
}