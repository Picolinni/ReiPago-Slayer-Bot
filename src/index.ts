import {Client} from "discord.js";
import Config from "../config";


export default class Index {
    private client: Client;
    
    constructor() {
        this.client = new Client({
            intents: ["Guilds", "GuildMessages", "DirectMessages"],
        });

        this.client.once("ready", () => {
            console.log("ReiPago Slayer Bot is ready.");
        });
        this.client.login(new Config().getToken);
    }
}

new Index();