import {GET} from "./API";

export class Github {
    static async repos(org) {
        return await GET(`/orgs/${org}/repos`)
    }
}