import {GET} from "./API";

export class Github {
    static async repos(org) {
        return await GET(`https://api.github.com/orgs/${org}/repos`)
    }

    static async getByUrl(id) {
        return await GET(id)
    }
}