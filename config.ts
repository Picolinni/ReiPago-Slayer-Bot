import dotenv from "dotenv";

export default class Config {
    private token: string;
    private clientID: string;

    constructor() {
        dotenv.config();

        const {TOKEN, CLIENT_ID} = process.env;

        if (!TOKEN || !CLIENT_ID)
            throw new Error("Missing environment variables.");

        this.token = TOKEN;
        this.clientID = CLIENT_ID;
    }

    public get getToken(): string {
        return this.token;
    }

    public get getClientID(): string {
        return this.clientID;
    }
}