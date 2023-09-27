import { injectable } from "inversify";
import { PrismaClient } from "@prisma/client";

@injectable()
export class PrismaContext extends PrismaClient {
    constructor() {
        super({
            errorFormat: "minimal"
        })

        this.$connect();
    }
}